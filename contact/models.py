from django.db import models
from choices import *
from resturant.models import Restaurant


class Address(models.Model):
    line1=models.CharField(max_length=200, null=False)
    line2=models.CharField(max_length=200, null=True,blank=True)
    location = models.CharField(max_length=200, null=False)
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)
    city = models.CharField(max_length=20, null=False, default="Not given")
    state = models.CharField(max_length=20, null=False, default="Not given")

    def __str__(self):
        return self.location


class ContactNumber(models.Model):
    number = models.BigIntegerField(null=False)
    type = models.CharField(choices=ContactType.contactChoices, default=ContactType.MOBILE, max_length=10)

    def __str__(self):
       return dict(ContactType.contactChoices).get(self.type)+" : "+str(self.number)

# Create your models here.
