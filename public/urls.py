from django.conf.urls import url
from . import views
from django.views.generic import TemplateView

urlpatterns=[
    url(r'^$',views.landing.as_view(),name="landing"),
    url(r'^robots\.txt/$', TemplateView.as_view(template_name='templates/general/robots.txt', content_type='text/plain')),

    url(r'about/^$',views.about.as_view(),name="about"),
    # url(r'^bootstrap/$',views.bootstrap,name='bootstrap'),
    #url(r'^search/(?P<searchParam>[a-zA-Z]+)/$',views.search,name='search'),

]