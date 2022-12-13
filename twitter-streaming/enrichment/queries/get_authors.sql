select 
    distinct(trim(author_id))
from tweets 
where username = ''
    and author_id not in (select id from twitterUser)
limit 100