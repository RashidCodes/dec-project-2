with source as (
    select * 
    from {{ source('default', 'tweets' ) }}
)

select * from source