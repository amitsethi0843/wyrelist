from django.db import models
from choices import *
from resturant.models import Restaurant


class Address(models.Model):
    location = models.CharField(max_length=50, null=False, default="Not given")
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)
    city = models.CharField(max_length=10, null=False, default="Not given")
    state = models.CharField(max_length=10, null=False, default="Not given")
    restaurant=models.OneToOneField(Restaurant,null=True,on_delete=models.CASCADE)



class ContactNumber(models.Model):
    number = models.BigIntegerField(null=False)
    type = models.CharField(choices=ContactType.contactChoices, default=ContactType.MOBILE, max_length=10)
    restaurant=models.OneToOneField(Restaurant,null=True,on_delete=models.CASCADE)

# Create your models here.
