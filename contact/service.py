__author__ = 'amitsethi'
from models import *


def createAddress(**kwargs):
    address = Address()
    address.latitude = kwargs.get('latitude')
    address.longitude = kwargs.get('longitude')
    address.location = kwargs.get('location')
    address.city = kwargs.get('city') if kwargs.has_key('city') else ""
    address.state = kwargs.get('state') if kwargs.has_key('state') else ""
    address.save()
    return address

