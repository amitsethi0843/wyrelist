from django.conf.urls import url
from .views import GetLandingInstance

urlpatterns = [
 url(r'^home/$', GetLandingInstance.as_view(), name='get_home')
]
