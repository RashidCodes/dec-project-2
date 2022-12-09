from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_recent_events():

    response = client.get('/recent_events')
    assert response.status_code == 200 
