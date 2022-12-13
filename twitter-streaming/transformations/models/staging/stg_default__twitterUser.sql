with source as (
    select * 
    from {{ source('default', 'twitterUser' ) }}
)

select * from source