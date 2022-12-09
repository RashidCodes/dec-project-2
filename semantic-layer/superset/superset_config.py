SESSION_COOKIE_SAMESITE = None
ENABLE_PROXY_FIX = True
PUBLIC_ROLE_LIKE_GAMMA = True
FEATURE_FLAGS = {
  "EMBEDDED_SUPERSET": True
}
SQLALCHEMY_DATABASE_URI = 'postgres://postgres:postgres@postgres:5432/postgres'

# Flask-WTF flag for CSRF
ENABLE_CORS = True

CORS_OPTIONS = {
  'supports_credentials': True,
  'allow_headers': [
    'X-CSRFToken', 'Content-Type', 'Access-Control-Allow-Origin', 'X-Requested-With', 'Accept',
  ],
  'resources': [
    '/superset/csrf_token/',  # auth
    '/api/v1/formData/',  # sliceId => formData
    '/superset/explore_json/*',  # legacy query API, formData => queryData
    '/api/v1/query/',  # new query API, queryContext => queryData
    '/api/v1/security/login',  # new query API, queryContext => queryData
    '/superset/fetch_datasource_metadata/'  # datasource metadata
  ],
  'origins': ['http://localhost:3050','http://localhost:3000'],
}