from django.conf.urls import url
from views import RegisterRestaurant

urlpatterns = [
    url(r'^register/$',RegisterRestaurant.as_view(), name='register_restaurant')
]
