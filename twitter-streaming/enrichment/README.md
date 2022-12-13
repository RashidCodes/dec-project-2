# Enrich the twitter streams 

The twitter streams don't have enough user data. Use this image to get more user data.

```bash
docker run -it --rm --name enrich_twitter_streams --env-file .env kingmoh/enrich_twitter_streams
```