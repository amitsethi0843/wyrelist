from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', AdminIndex.as_view(), name="index"),
    url(r'^add/$', addEvent, name="add"),
        url(r'^test/$', test, name="test")

]
