ENVIRONMENT_PRODUCTION=True
AWS_QUERYSTRING_AUTH = False
AWS_S3_SECURE_URLS = False
AWS_STORAGE_BUCKET_NAME = 'wyrelist-prod'
AWS_ACCESS_KEY_ID = 'AKIAIEPJSYRYEMQG2XMQ'
AWS_SECRET_ACCESS_KEY = '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'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
# STATIC_URL = "https://%s/" % AWS_S3_CUSTOM_DOMAIN

MEDIA_URL = "https://%s/" % AWS_S3_CUSTOM_DOMAIN
