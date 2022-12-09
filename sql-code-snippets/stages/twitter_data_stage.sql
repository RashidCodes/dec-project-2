use warehouse ETL;
use role accountadmin;
use database airbyte_database;


create or replace stage airbyte_database.public.twitter_data_stage
    url = '[tweets json files S3 URI here]'
    storage_integration = TWITTER_INTEGRATION
    file_format = (type = JSON);