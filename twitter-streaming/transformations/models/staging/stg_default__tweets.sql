with tweets as (
    select * 
    from {{ source('default', 'tweets' ) }}
)

select * from tweets