select * 
from {{ ref('stg_default__tweets') }}
where author_id = ''