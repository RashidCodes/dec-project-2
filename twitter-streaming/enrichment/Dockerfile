FROM --platform=linux/amd64 python:3.9 

WORKDIR /src 

COPY ["enrich.py", "requirements.txt", "./"]

ADD queries ./queries

RUN pip install -r requirements.txt 

ENTRYPOINT ["python", "enrich.py"]