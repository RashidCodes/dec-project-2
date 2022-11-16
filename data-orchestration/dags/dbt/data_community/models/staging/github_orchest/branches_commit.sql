with raw_source as (

    select *
    from {{ source('github_orchest', 'branches_commit') }}

),

final as (

    select
        "_AIRBYTE_BRANCHES_HASHID"::VARCHAR as airbyte_branches_hashid,
        "SHA"::VARCHAR as sha,
        "URL"::VARCHAR as url,
        "_AIRBYTE_AB_ID"::VARCHAR as airbyte_ab_id,
        "_AIRBYTE_EMITTED_AT"::TIMESTAMP_TZ as airbyte_emitted_at,
        "_AIRBYTE_NORMALIZED_AT"::TIMESTAMP_TZ as airbyte_normalized_at,
        "_AIRBYTE_COMMIT_HASHID"::VARCHAR as airbyte_commit_hashid

    from raw_source

)

select * from final
