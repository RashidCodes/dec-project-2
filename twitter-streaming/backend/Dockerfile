FROM --platform=linux/amd64 python:3.9 

WORKDIR /src 

COPY ["main.py", "requirements.txt", "./"]

RUN pip install -r requirements.txt

EXPOSE 9876 9876

CMD uvicorn main:app --host 0.0.0.0 --port 9876