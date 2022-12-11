with top_users as (
    select
        username,
        location,
        verified,
        count(text) as number_of_user_tweets 
    from {{ ref('stg_default__tweets') }}
    where 
        location <> ''
        and username <> ''
    group by 
        username,
        location,
        verified
),

top_locations as (
    select 
        location,
        count(text) as number_of_location_tweets
    from {{ ref('stg_default__tweets') }}
    where location <> ''
    group by 
        location
),

user_name_window as (
    select *,
        max(number_of_user_tweets) over (
            partition by location 
            order by number_of_user_tweets desc
            rows between unbounded preceding 
            and unbounded following
        ) max_number_of_tweets_by_location
    from top_users 
    inner join top_locations 
        on top_users.location = top_locations.location
),

filtered as (
    select 
        location,
        number_of_location_tweets,
        username as most_frequent_tweeter,
        number_of_user_tweets,
        verified
    from user_name_window 
    where number_of_user_tweets = max_number_of_tweets_by_location
)

select * from filtered order by number_of_location_tweets desc


