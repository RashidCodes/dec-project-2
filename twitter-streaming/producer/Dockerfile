FROM --platform=linux/amd64 python:3.9 

WORKDIR /src 

COPY ["stream.py", "requirements.txt", "./"]

ADD utilities ./utilities

RUN pip install -r requirements.txt

CMD ["python", "stream.py"]