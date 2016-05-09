from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', GetEventList.as_view(), name='event_list')
]
