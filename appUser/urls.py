from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^register/$', RegisterUser.as_view(), name='register_user')
]
