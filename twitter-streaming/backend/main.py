from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import logging
import json
import os 

# Configure logging
logging.basicConfig(format='%(levelname)s:    %(message)s', level=logging.DEBUG)

# uvicorn main:app --reload

class Token(BaseModel):
    token: str


app = FastAPI()

origins = ['localhost:3050']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open('queries/top_tweets.sql', 'r') as file:
    query = file.read()


@app.get('/')
def welcome():
    return 'Welcome home'


@app.get('/recent_events')
def get_recent_events():

    base_url = os.environ.get("CLICKHOUSE_BASE_URL")
    params = {
        "user": os.environ.get("CLICKHOUSE_USER"),
        "password": os.environ.get('CLICKHOUSE_PASSWORD'),
        "query": query
    }

    try:
        response = requests.get(base_url, params=params)

        if response.status_code != 200:
            raise Exception("Unexpected response status code")

    except BaseException as err:
        logging.error(err)

    else:
        return response.json().get('data')


def make_request():

    base_url = 'http://superset:8088/api/v1/security/login'
    payload = json.dumps({
        "password": "admin",
        "username": "admin",
        "provider": "db",
        "refresh": "true"
    })

    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(base_url, json=payload, headers=headers)
    return response.json()

    
@app.get('/access')
def get_access_token():
    results = make_request()

    return results


@app.post('/access_guest')
def get_guest_token(token: Token):

    base_url = 'http://superset:8088/api/v1/security/guest_token'
    payload = {
        "user": {
            "username": "worldcupuser", 
            "first_name": "worldcup", 
            "last_name": "worldcup"
        }, 
        "resources":[
            {
                "type": "dashboard", 
                "id": "98063d44-f0e1-4650-a638-d52549f75323"
            }
        ],
        "rls": []
    }

    headers = {
        "Authorization": f"Bearer {token.token}"
    }

    response = requests.post(base_url, json=payload, headers=headers)
    
    # if response.status_code != 200:
    #     raise Exception('Guest token was not generated')

    return response.json()