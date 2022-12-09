# Superset setup

## Configure superset

```bash 
# log into the superset container 
docker exec -it superset superset fab create-admin  --username admin --firstname Superset --lastname Admin --email admin@superset.com  --password admin;
docker exec -it superset superset db upgrade;
docker exec -it superset superset init;
docker exec -it superset pip install clickhouse-connect;
docker exec -it superset pip install "apache-superset[cors]";
# docker exec -it superset pip install clickhouse-driver;
# docker exec -it superset pip install clickhouse-sqlalchemy;


```

# Installing new database drivers

https://superset.apache.org/docs/databases/docker-add-drivers
