from django.db import models
from contact.models import *
from appUser.models import AppUser
from choices import *
import uuid


class EventRule(models.Model):
    entryType = models.CharField(choices=EntryType.entryChoices, null=False, default=EntryType.SINGLE, max_length=20)
    entryChargeable = models.BooleanField()
    feesPerEntry = models.FloatField(null=True,default=0,blank=True)
    dateOfEvent = models.DateField(null=False)
    startingTime = models.TimeField(null=False)
    endingTime = models.TimeField(null=True)


class Event(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    createdBy = models.ForeignKey(AppUser, null=False)
    description = models.CharField(null=False, max_length=1000)
    location = models.ForeignKey(Address, null=False)
    contact_number = models.ManyToManyField(ContactNumber, null=False)
    eventRule = models.OneToOneField(EventRule)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)

    @classmethod
    def create(cls, description, createdBy, location, contact_number, eventRule):
        try:
            event = cls(
                createdBy=createdBy,
                location=location,
                eventRule=eventRule,
                description=description
            )
            event.save()
            event.contact_number.add(contact_number)
            return event
        except Exception as e:
            print(e)
