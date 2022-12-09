use warehouse ETL;
use role accountadmin;
use database airbyte_database;


create or replace pipe airbyte_database.public.twitter_users_snowpipe auto_ingest=true as
copy into airbyte_database.public.raw_twitter_users
from (
    select 
    $1:data[0].username,
    $1:data[0].name,
    $1:data[0].id,
    $1:data[0].public_metrics,
    $1:data[0].pinned_tweet_id,
    $1:data[0].description,
    $1:data[0].created_at,
    $1:data[0].verified
from @airbyte_database.public.twitter_users_stage);