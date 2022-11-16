with raw_source as (

    select *
    from {{ source('github_orchest', 'repositories_permissions') }}

),

final as (

    select
        "_AIRBYTE_REPOSITORIES_HASHID"::VARCHAR as airbyte_repositories_hashid,
        "PULL"::BOOLEAN as pull,
        "PUSH"::BOOLEAN as push,
        "ADMIN"::BOOLEAN as admin,
        "_AIRBYTE_AB_ID"::VARCHAR as airbyte_ab_id,
        "_AIRBYTE_EMITTED_AT"::TIMESTAMP_TZ as airbyte_emitted_at,
        "_AIRBYTE_NORMALIZED_AT"::TIMESTAMP_TZ as airbyte_normalized_at,
        "_AIRBYTE_PERMISSIONS_HASHID"::VARCHAR as airbyte_permissions_hashid

    from raw_source

)

select * from final
