from django.db import models
from choices import *


class Subscription(models.Model):
    email = models.EmailField(null=False, max_length=40)
    message = models.CharField(null=True, max_length=100)
    name=models.CharField(null=True,max_length=20)
    userType = models.CharField(choices=UserType.userTypeChoices, default=UserType.USER,max_length=10)

    def get_object(self,pk):
        subscription=self.objects.get(pk=pk)
        return subscription if subscription else None

