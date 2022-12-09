FROM --platform=linux/arm64 python:3.9 

WORKDIR /src 

COPY ["main.py", "requirements.txt", "./"]

ADD queries ./queries

RUN pip install -r requirements.txt

ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9876"]
