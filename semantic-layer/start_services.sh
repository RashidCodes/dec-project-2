#!/bin/bash 

docker-compose up -d
docker exec -it superset superset fab create-admin  --username admin --firstname Superset --lastname Admin --email admin@superset.com  --password admin;
docker exec -it superset superset db upgrade;
docker exec -it superset superset init;
docker exec -it superset pip install clickhouse-driver;
docker exec -it superset pip install clickhouse-sqlalchemy;
docker exec -it superset pip install clickhouse-connect;
docker-compose restart;