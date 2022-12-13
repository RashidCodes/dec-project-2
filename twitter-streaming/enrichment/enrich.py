import clickhouse_connect
import random
import requests
import time 
import logging 
import sys
import os 

logging.basicConfig(format='%(levelname)s:    %(message)s', level=logging.DEBUG)

def extract_and_load_user_data():

    client = clickhouse_connect.get_client(host=os.getenv('CLICKHOUSE_BASE'), port=8443, username=os.getenv('CLICKHOUSE_USER'), password=os.getenv('CLICKHOUSE_PASS'))

    with open('queries/create_user_table.sql') as file:
        create_user_table = file.read()

    client.command(create_user_table)

    with open('queries/get_authors.sql') as file:
        get_authors = file.read()


    params = {"user.fields": "id,created_at,location,name,profile_image_url,username,verified"}
    headers = {"Authorization": f"Bearer {os.getenv('APP_ACCESS_TOKEN')}"}

    try:
        results: 'list(tuple)' = client.query(get_authors)
        ids = [author_id for authors in results.result_set for author_id in authors]
        cs_ids = ','.join(ids)

    except BaseException as err:
        logging.error(err)
        sys.exit()


    base_url = f"https://api.twitter.com/2/users?ids={cs_ids}"
    response = requests.get(base_url, params=params, headers=headers)

    if response.status_code != 200:
        raise Exception(f'Unable to get users details')

    data = response.json().get('data')

    records = []

    # Structure the data 
    for record in data:
        value = [
            record['id'], 
            record['verified'], 
            record['username'], 
            record['name'], 
            record['profile_image_url'], 
            record['created_at'], 
            record['location'] if record.get('location') else ''
        ]
        records.append(value)
    
    # push data
    client.insert('twitterUser', records, column_names=['id', 'verified', 'username', 'name', 'profile_image_url', 'created_at', 'location'])

    


if __name__ == '__main__':
    empty_response = 0

    while True:
        try:
            extract_and_load_user_data()
            time.sleep(2)
        except TypeError as err:
            logging.error(err)
            empty_response += 1

            if empty_response <= 3:
                time.sleep(random.randrange(10, 15))
            elif empty_response > 3 and empty_response <= 5:
                time.sleep(100)
            else:
                logging.info(f'Emtpy responses: {empty_response}')
                logging.info("Too many empty responses. Shutting down. Try again later")
                sys.exit()
        except BaseException as err:
            logging.error(f'An error occurred: {err}. Shutting down')
            sys.exit()
        else:
            logging.info('Successfully pushed users details')