#!/bin/bash 


# Pull latest images
docker pull kingmoh/dashboard:latest;
docker pull kingmoh/dashboard-backend:latest;
docker pull kingmoh/nginx:latest;

# Create external network
docker network create -d bridge fifa;


# The tree musketeers
docker run -d --name frontend -it -p 3000:3000 --network fifa  --restart always kingmoh/dashboard:latest;

if [[ $? -ne 0 ]]
then
    echo "Restarting dashboard";
    docker rm -f frontend;
    docker run -d --name frontend -it -p 3000:3000 --network fifa  --restart always kingmoh/dashboard:latest;
fi


docker run -d --name backend -it -p 9876:9876 --network fifa --restart always --env-file .env kingmoh/dashboard-backend:latest;

if [[ $? -ne 0 ]]
then
    echo "Restarting backend";
    docker rm -f backend;
    docker run -d --name backend -it -p 9876:9876 --network fifa --restart always --env-file .env kingmoh/dashboard-backend:latest;
fi



docker run -d --name nginx -it -p 3050:80 --network fifa --restart always kingmoh/nginx:latest;

if [[ $? -ne 0 ]]
then
    echo "Restarting Proxy Server";
    docker rm -f nginx;
    docker run -d --name nginx -it -p 3050:80 --network fifa --restart always kingmoh/nginx:latest;
fi


exit 0