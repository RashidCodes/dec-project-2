select top 3 * 
from tweets 
where username <> '' 
order by created_at desc format JSON

