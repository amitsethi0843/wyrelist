from models import Event, EventAmenity
import logging
from event.choices import AmenityType
from common.service import google as googleService

logging.basicConfig()
log = logging.getLogger(__name__)
from contact.service import createAddressFromForm, createContactNumberFromForm, createAddress
from appUser.models import AppUser


def createEvent(eventForm, eventRuleForm, addressForm, contactForm):
    try:
        contact = createContactNumberFromForm(contactForm)
        address = createAddressFromForm(addressForm)
        eventRule = eventRuleForm.save()
        description = eventForm.cleaned_data['description']
        created_by = eventForm.cleaned_data['createdBy']
        if contact and address and eventRule and created_by:
            event = Event.create(description, created_by, address, contact, eventRule)
            createEventAmenities(event)
            return event
    except Exception as e:
        log.error("event errorrr======" + str(e))
        return None


def createEventAmenities(event):
    latitude = event.location.latitude
    longitude = event.location.longitude
    try:
        for choices in AmenityType.googleMapingChoices:
            response = googleService.nearByPlace(choices[1],10000, latitude=latitude, longitude=longitude)
            response = response['results']
            for priority, i in enumerate(response):
                address = createAddress(
                    latitude=i['geometry']['location']['lat'],
                    longitude=i['geometry']['location']['lng'],
                    line1=i['name'],
                    line2=i['vicinity']
                )
                EventAmenity.objects.create(location=address,
                                            type=choices[0],
                                            event=event,
                                            priority=priority)
    except Exception as e :
        log.error(e)


def createEventRuleFromForm(eventRuleForm):
    try:
        eventRule = eventRuleForm.save()
        return eventRule
    except Exception as e:
        log.error(e)
        log.error(eventRuleForm.errors)
        return None
