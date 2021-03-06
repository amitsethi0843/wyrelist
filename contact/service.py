__author__ = 'amitsethi'
from models import *
import logging
logging.basicConfig()
log=logging.getLogger(__name__)


def createAddress(**kwargs):
    address = Address()
    address.latitude = kwargs.get('latitude')
    address.longitude = kwargs.get('longitude')
    address.line1=kwargs.get('line1')
    address.line2=kwargs.get('line2')
    address.location = kwargs.get('location') if kwargs.get('location') else ""
    address.city = kwargs.get('city') if kwargs.has_key('city') else ""
    address.state = kwargs.get('state') if kwargs.has_key('state') else ""
    address.save()
    return address

def createAddressFromForm(addressForm):
    try:
        address=addressForm.save()
        return address
    except Exception as e:
        log.error(e)
    return None



def createContactNumberFromForm(contactForm):
    try:
        contact=contactForm.save()
        return contact
    except Exception as e:
        log.error(e)
    return None

