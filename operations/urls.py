
from django.conf.urls import url
from views import *

urlpatterns=[
   url(r'^login/$',loginUser,name='user_login'),
   url(r'^register/$',registerUser,name='user_register'),
   url(r'^logout/$',logoutUser,name='user_logout'),
   url(r'^bootstrap/$',bootStrap,name='bootstrap_data'),
   url(r'^$',Landing.as_view(),name="landing"),
   url(r'^robots\.txt/$', TemplateView.as_view(template_name='general/robots.txt', content_type='text/plain')),
   url(r'about/^$',About.as_view(),name="about"),

]