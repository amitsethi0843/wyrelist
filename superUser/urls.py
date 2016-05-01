from django.conf.urls import url,include
from views import *


urlpatterns=[
    url(r'^event/',include('event.urls', namespace='event'))
]