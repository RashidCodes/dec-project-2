select *
from {{ ref('stg_default__tweets') }}
where verified is null 