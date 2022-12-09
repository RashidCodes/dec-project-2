use warehouse ETL;
use role accountadmin;
use database airbyte_database;

create or replace table raw_twitter_users(
    username varchar(16777216),
    name varchar(16777216),
    id integer, 
    public_metrics variant,
    pinned_tweet_id integer,
    description varchar(16777216),
    created_at timestamp_ntz,
    verified varchar(16777216)
);