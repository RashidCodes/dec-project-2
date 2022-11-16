with raw_source as (

    select *
    from {{ source('github_luigi', 'pull_requests__links_review_comments') }}

),

final as (

    select
        "_AIRBYTE__LINKS_HASHID"::VARCHAR as airbyte_links_hashid,
        "HREF"::VARCHAR as href,
        "_AIRBYTE_AB_ID"::VARCHAR as airbyte_ab_id,
        "_AIRBYTE_EMITTED_AT"::TIMESTAMP_TZ as airbyte_emitted_at,
        "_AIRBYTE_NORMALIZED_AT"::TIMESTAMP_TZ as airbyte_normalized_at,
        "_AIRBYTE_REVIEW_COMMENTS_HASHID"::VARCHAR as airbyte_review_comments_hashid

    from raw_source

)

select * from final
