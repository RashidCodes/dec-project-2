import requests 
import os

def get_user_details(user_id: str):

    base_url = f'https://api.twitter.com/2/users/{user_id}'
    params = {
        "user.fields": "created_at,location,name,pinned_tweet_id,profile_image_url,username,verified"
    }

    headers = {
        "Authorization": f"Bearer {os.environ.get('APP_ACCESS_TOKEN')}"
    }

    response = requests.get(base_url, params=params, headers=headers)

    return response.json().get('data')