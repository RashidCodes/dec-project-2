use warehouse ETL;
use role accountadmin;
use database airbyte_database;

create or replace storage integration twitter_integration
    type = external_stage
    storage_provider = S3
    enabled = TRUE
    storage_aws_role_arn = '[role value here]'
    storage_allowed_locations = ('*');