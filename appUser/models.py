from django.db import models
from django.contrib.auth.models import User
import portfolioFile.services as fileService
import uuid
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from choices import *


class AppUser(User):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    gender = models.CharField(choices=Gender.genderChoices, default=Gender.NOTDISCLOSED, max_length=20)
    dateOfBirth = models.DateField(null=True)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)
    token=models.ForeignKey(Token,null=True,on_delete=models.CASCADE)


    @classmethod
    def create(cls, userData):
        try:
           user= cls(
                username=userData['username'],
                email=userData['username'],
                password=userData['password']
            )
           user.save()
           token=Token.objects.create(user=user)
           user.token=token
           user.save()
           return user
        except Exception as e:
            print(e)


    def __str__(self):
        return self.first_name + ' ' + self.last_name


class ProfileImage(models.Model):
    user = models.ForeignKey(AppUser)
    type = models.CharField(choices=UserImageType.imageChoices, default=UserImageType.GENERAL, max_length=20)
    image = models.ImageField(null=True, upload_to=fileService.get_userImage_upload_path)

# Create your models here.
