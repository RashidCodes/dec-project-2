create table if not exists twitterUser (
    verified Bool,
    profile_image_url String,
    id String,
    created_at String,
    username String,
    location String,
    name String
) engine = MergeTree order by (id, username)