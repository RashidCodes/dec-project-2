import requests 
import os
import json
import utilities.ccloud_lib as ccloud_lib
import logging
from utilities.process_streams import process_streams
from confluent_kafka.cimpl import Producer

logging.basicConfig(format='%(levelname)s:    %(message)s', level=logging.DEBUG)


bearer_token = os.environ.get('APP_ACCESS_TOKEN')
delivered_records = 0 
config_file = 'github.config'
topic = 'tweets'

conf = {
    "bootstrap.servers": os.environ.get('BOOTSTRAP_SERVERS'),
    "security.protocol": os.environ.get('SECURITY_PROTOCOL'),
    "sasl.mechanisms": os.environ.get('SASL_MECHANISM'),
    "sasl.username": os.environ.get("SASL_USERNAME"),
    "sasl.password": os.environ.get("SASL_PASSWORD"),
    "compression.type": "lz4",
    "batch.size": "10000",
    "request.timeout.ms": "120000",
    "queue.buffering.max.messages": "200000"
}

# create producer instance 
producer_conf = ccloud_lib.pop_schema_registry_params_from_config(conf)
producer = Producer(producer_conf)

# create topic if needed 
ccloud_lib.create_topic(conf, topic)

def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "v2FilteredStreamPython"
    return r


def get_rules() -> json:

    """
    Get stream rules
    """
    response = requests.get(
        "https://api.twitter.com/2/tweets/search/stream/rules", auth=bearer_oauth
    )
    if response.status_code != 200:
        raise Exception(
            "Cannot get rules (HTTP {}): {}".format(response.status_code, response.text)
        )
    return response.json()


def delete_all_rules(rules) -> None:

    """
    Delete all stream rules 
    """
    if rules is None or "data" not in rules:
        return None

    ids = list(map(lambda rule: rule["id"], rules["data"]))
    payload = {"delete": {"ids": ids}}
    response = requests.post(
        "https://api.twitter.com/2/tweets/search/stream/rules",
        auth=bearer_oauth,
        json=payload
    )
    if response.status_code != 200:
        raise Exception(
            "Cannot delete rules (HTTP {}): {}".format(
                response.status_code, response.text
            )
        )


def set_rules():

    """
    Set rules
    """
    # You can adjust the rules if needed
    sample_rules = [
        {"value": "world cup", "tag": "worldcup"},
        {"value": "fifa world cup", "tag": "fifa worldcup"}
    ]
    payload = {"add": sample_rules}
    response = requests.post(
        "https://api.twitter.com/2/tweets/search/stream/rules",
        auth=bearer_oauth,
        json=payload,
    )
    if response.status_code != 201:
        raise Exception(
            "Cannot add rules (HTTP {}): {}".format(response.status_code, response.text)
        )



def stream_events() -> None:

    """
    Stream tweet events and load to Confluent Kafka
    """

    global producer

    def acked(err, msg):
        global delivered_records
        """Delivery report handler called on
        successful or failed delivery of message
        """
        if err is not None:
            print("Failed to deliver message: {}".format(err))
        else:
            delivered_records += 1
            logging.info("Produced record to topic {} partition [{}] @ offset {}"
                    .format(msg.topic(), msg.partition(), msg.offset()))

    base_url = f'https://api.twitter.com/2/tweets/search/stream'
    params = {
        "tweet.fields": "created_at",
        "expansions": "author_id"
    }

    response = requests.get(base_url, params=params, stream=True, auth=bearer_oauth)

    for response_line in response.iter_lines():
        if response_line:
            json_response = json.loads(response_line)
            
            try:
                tweet_data = json_response.get('data')
                processed = process_streams(json.dumps(tweet_data))
            except TypeError as err:
                logging.error(f"An error occurred while processing stream: {err}")
                continue
            else:
                producer.produce(topic, key=processed['id'], value=json.dumps(processed), on_delivery=acked)
                producer.poll(0)

    producer.flush()
    logging.info("{} messages were produced to topic {}!".format(delivered_records, topic))





def main():
    rules = get_rules()
    delete = delete_all_rules(rules)
    set = set_rules()
    stream_events()


if __name__ == "__main__":
    main()