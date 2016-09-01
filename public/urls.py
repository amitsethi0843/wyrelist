from django.conf.urls import url
from .views import *
from django.views.generic import DeleteView
from .models import HomePage

urlpatterns = [
    url(r'^homePage/$', HomePageIndex.as_view(), name="homePageIndex"),
    url(r'^addHomePage/$', addHomePage, name="addHomePage"),
    url(r'^changeHomePageStatus/$',changeStatus,name="changeHomePageStatus"),
    url(r'^deleteHomePage/(?P<pk>\d+)/$',DeleteHomePage.as_view(),name="removeHomePage")
]
