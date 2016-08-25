from django.db import models
from contact.models import *
from appUser.models import AppUser
from choices import *
import portfolioFile.services as fileService
import uuid
from tabmgnt.settings import MEDIA_ROOT
import logging
logging.basicConfig()
import json
log=logging.getLogger(__name__)


class EventRule(models.Model):
    entryType = models.CharField(choices=EntryType.entryChoices, null=False, default=EntryType.SINGLE, max_length=20)
    entryChargeable = models.BooleanField(default=False)
    feesPerEntry = models.FloatField(null=True,default=0)
    dateOfEvent = models.DateField(null=False)
    duration=models.IntegerField(null=False,default=1)
    startingTime = models.TimeField(null=False)
    endingTime = models.TimeField(null=True)


class Event(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    createdBy = models.ForeignKey(AppUser, null=False)
    description = models.CharField(null=False, max_length=1000)
    location = models.ForeignKey(Address, null=False)
    contact_number = models.ManyToManyField(ContactNumber, null=False)
    eventRule = models.OneToOneField(EventRule)
    totalEntries=models.IntegerField(null=False,blank=True,default=100)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)


    def nearby_locations(self):
        try:
            nearbyLocations=[]
            locations=EventAmenity.objects.filter(event=self,priority__in=[0,1,2,3]).values()
            for location in locations:
                res=dict()
                res['location']=location
                address=Address.objects.get(id=location['location_id'])
                res['line1']=address.line1
                res['line2']=address.line2
                res['latitude']=address.latitude
                res['longitude']=address.longitude
                nearbyLocations.append(res)
            return nearbyLocations
        except Exception as e:
            log.error(e)
            return None

    def event_normalImages(self):
        try:
            # print(hasattr(self,'eventImages'))
            eventImage=self.eventimage_set.values()[0]
            # for image in eventImages:
            eventImage['image']=str(MEDIA_ROOT)+"/"+str(eventImage['image'])
            return eventImage
        except Exception as e:
            log.error(e)
            return None

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

class EventImage(models.Model):
    event=models.ForeignKey(Event,null=False, unique=False)
    image = models.ImageField(null=True, upload_to=fileService.get_event_upload_path)
    type=models.CharField(choices=ImageType.imageTypeChoices,default=ImageType.NORMAL,max_length=15)

    @classmethod
    def createMultipleInstances(cls,event,portfolioImage):
        for i in portfolioImage:
            imageInstance=cls(event=event,
                       image=i,
                       type=ImageType.NORMAL)
            imageInstance.save()


class EventAmenity(models.Model):
    event=models.ForeignKey(Event,null=False, unique=False)
    type=models.CharField(choices=AmenityType.amenityTypeChoices,default=AmenityType.NONE,max_length=20)
    location = models.ForeignKey(Address, null=False)
    priority=models.IntegerField(null=False,default=0)


class EventTicket(models.Model):
    event=models.ForeignKey(Event,null=False,unique=False)
    user=models.ForeignKey(AppUser, null=False,unique=False)
    totalTickets=models.IntegerField(null=False)




