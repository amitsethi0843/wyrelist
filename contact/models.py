from django.db import models
from choices import *


class Address(models.Model):
    location = models.CharField(max_length=50, null=False, default="Not given")
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)
    city = models.CharField(max_length=10, null=False, default="Not given")
    state = models.CharField(max_length=10, null=False, default="Not given")



class ContactNumber(models.Model):
    number = models.BigIntegerField(null=False)
    type = models.CharField(choices=ContactType.contactChoices, default=ContactType.MOBILE, max_length=10)

# Create your models here.
