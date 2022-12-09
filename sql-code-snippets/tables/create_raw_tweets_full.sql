use warehouse ETL;
use role accountadmin;
use database airbyte_database;

create or replace table raw_tweets_full(
    username varchar(16777216),
    data variant,
    metadata variant
);