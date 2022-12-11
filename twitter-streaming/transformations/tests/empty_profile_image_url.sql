select *
from {{ ref('stg_default__tweets') }}
where profile_image_url = ''