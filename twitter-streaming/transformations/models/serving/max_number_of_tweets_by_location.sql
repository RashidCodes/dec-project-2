with top_users as (
    select
        username,
        author_id,
        location,
        verified,
        count(text) as number_of_user_tweets 
    from {{ ref('stg_default__tweets') }}
    where 
        location <> ''
        and match(location, '.*[a-zA-Z].*') = 1
        and username <> ''
    group by 
        username,
        location,
        author_id,
        verified
),

top_locations as (
    select 
        location,
        count(text) as number_of_location_tweets
    from {{ ref('stg_default__tweets') }}
    where 
        location != ''
        and match(location, '.*[a-zA-Z].*') = 1
    group by 
        location
),

user_name_window as (
    select 
        top_locations.location as location,
        top_locations.number_of_location_tweets as number_of_location_tweets,
        case 
            when twitterUser.username = '' then top_users.username 
            else twitterUser.username 
        end as most_frequent_tweeter,
        top_users.author_id as author_id,
        twitterUser.name as author_name,
        top_users.verified as verified,
        top_users.number_of_user_tweets as number_of_user_tweets,
        max(top_users.number_of_user_tweets) over (
            partition by top_locations.location 
            order by top_users.number_of_user_tweets desc
            rows between unbounded preceding 
            and unbounded following
        ) max_number_of_tweets_by_location
    from top_users 
    inner join top_locations 
        on top_users.location = top_locations.location
    left join {{ ref('stg_default__twitterUser') }} twitterUser
        on top_users.author_id = twitterUser.id 
),

filtered as (
    select 
        location,
        number_of_location_tweets,
        most_frequent_tweeter,
        author_id,
        author_name,
        verified,
        number_of_user_tweets
    from user_name_window 
    where number_of_user_tweets = max_number_of_tweets_by_location
)

select * from filtered order by number_of_location_tweets desc