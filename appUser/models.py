from django.db import models
from django.contrib.auth.models import User
import portfolioFile.services as fileService
import uuid
from choices import *





class AppUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    gender = models.CharField(choices=Gender.genderChoices, default=Gender.NOTDISCLOSED, max_length=20)
    dateOfBirth = models.DateField(null=True)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name


class ProfileImage(models.Model):
    user = models.ForeignKey(AppUser)
    type = models.CharField(choices=UserImageType.imageChoices, default=UserImageType.GENERAL, max_length=20)
    image = models.ImageField(null=True, upload_to=fileService.get_userImage_upload_path)

# Create your models here.
