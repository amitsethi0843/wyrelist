from django.conf.urls import url
from .views import CreateUser,LoginUser

urlpatterns = [
    url(r'^register/$', CreateUser.as_view(), name='create_user'),
    url(r'^login/$', LoginUser.as_view(), name='create_user')

]
