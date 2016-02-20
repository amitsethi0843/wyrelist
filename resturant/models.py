from django.db import models
from django.contrib.auth.models import User
from choices import *
import uuid


class Restaurant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20, null=False)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name


class Table(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    numberOfChairs = models.IntegerField()
    status = models.CharField(choices=TableLife.tableLifeChoices, default=TableLife.ACTIVE,max_length=20)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)


class TableSession(models.Model):
    table = models.ForeignKey(Table)
    occupiedChairs = models.IntegerField
    status = models.CharField(choices=TableStatus.tableStatusChoices, default=TableStatus.VACANT, max_length=20)
    timeCreated = models.TimeField(auto_now_add=True)
    timeUpdated = models.TimeField(auto_now=True)


class DoorMan(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)


class OnDoorCustomer(models.Model):
    doorMan = models.ForeignKey(DoorMan)
    name = models.CharField(null=False, max_length=20)
    contactNumber = models.CharField(null=False, max_length=20)
