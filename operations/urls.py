
from django.conf.urls import url
from views import *

urlpatterns=[
   url(r'^login/$',loginUser,name='user_login'),
   url(r'^register/$',registerUser,name='user_register'),
   url(r'^logout/$',logoutUser,name='user_logout')
]