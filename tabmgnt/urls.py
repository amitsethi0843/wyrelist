"""tabmgnt URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from settings import REST_PREURL

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('operations.urls', namespace='ops')),
    url(r'^subscribe/', include('subscription.urls', namespace='subscription')),
    url(r'^restaurant/', include('resturant.urls', namespace='restaurant')),
    url(r'^superUser/', include('superUser.urls', namespace='superUser')),


    url(r'^'+REST_PREURL+'user/', include('appUser.api.urls', namespace='user_api')),
    url(r'^'+REST_PREURL+'event/', include('event.api.urls', namespace='event_api')),


]
