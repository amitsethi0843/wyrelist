from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^homePage/$', HomePageIndex.as_view(), name="homePageIndex"),
    url(r'^addHomePage/$', addHomePage, name="addHomePage"),
    url(r'^changeHomePageStatus/$',changeStatus,name="changeHomePageStatus")
]
