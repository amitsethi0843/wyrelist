from django.conf.urls import url
from views import *


urlpatterns = [
    url(r'^$',CreateSubscription.as_view(), name='create')
]
