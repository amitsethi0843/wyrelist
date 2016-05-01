from django.conf.urls import url
from .views import CreateUser

urlpatterns = [
    url(r'^register/$', CreateUser.as_view(), name='create_user')
]
