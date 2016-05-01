from models import Event
import logging

logging.basicConfig()
log = logging.getLogger(__name__)
from contact.service import createAddressFromForm, createContactNumberFromForm
from appUser.models import AppUser

def createEvent(eventForm, eventRuleForm, addressForm, contactForm):
    try:
        contact = createContactNumberFromForm(contactForm)
        address = createAddressFromForm(addressForm)
        eventRule = eventRuleForm.save()
        description=eventForm.cleaned_data['description']
        created_by=eventForm.cleaned_data['createdBy']
        print("======================"+str(type(contact)))
        if contact and address and eventRule and created_by:
            event = Event.create(description, created_by, address, contact, eventRule)
            return event
    except Exception as e:
        log.error("event errorrr======"+str(e))
        return None


def createEventRuleFromForm(eventRuleForm):
    try:
        eventRule = eventRuleForm.save()
        return eventRule
    except Exception as e:
        log.error(e)
        log.error(eventRuleForm.errors)
        return None
