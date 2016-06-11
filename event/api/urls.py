from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', GetEventList.as_view(), name='event_list'),
     url(r'^(?P<eventId>[\w-]+)/$', GetEvent.as_view(), name='event_detail')

]
