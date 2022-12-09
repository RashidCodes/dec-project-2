#!/bin/bash 

echo "Updating images";
docker-compose pull;
docker network create -d bridge fifa;
docker-compose restart;