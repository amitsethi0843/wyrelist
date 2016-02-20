from django.db import models
from choices import *


class Subscription(models.Model):
    email = models.EmailField(null=False, max_length=40)
    message = models.EmailField(null=True, max_length=100)
    userType = models.CharField(choices=UserType.userTypeChoices, default=UserType.USER,max_length=10)
