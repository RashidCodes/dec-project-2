# ClickHouse 

## Tweet data model
```sql 
create table tweets (
    verified Bool,
    profile_image_url String,
    id String,
    created_at datetime,
    username String,
    author_id String,
    edit_history_tweet_ids Array(String),
    location String,
    name String,
    text String
) engine = MergeTree order by (id, created_at)
```
<br/>

# Useful Docker commands 

```bash
docker tag local-image:tagname new-repo:tagname;
docker push new-repo:tagname;
docker run --rm -it -p 3000:80 frontend;
```
<br/>

```bash
docker build . -t kingmoh/dashboard:latest;
docker push kingmoh/dashboard:latest;
```

<br/>

```bash
docker build . -t kingmoh/nginx:latest;
docker push kingmoh/nginx:latest;
```

<br/>

```bash
docker build . -t kingmoh/dashboard-backend:latest;
docker tag backend:latest;
```

<br/>

```bash
docker build . -t kingmoh/superse:latest;
docker push kingmoh/superset:latest;
```
<br/>

```bash
docker build . -t kingmoh/tweet_producer:latest;
docker push kingmoh/tweet_producer:latest;
```

<br/>
