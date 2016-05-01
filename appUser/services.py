import binascii
from operations.forms import registerForm
from django.contrib.auth.models import User
from models import AppUser, Gender, ProfileImage, UserImageType
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
import datetime
import StringIO
import binascii
import os
from PIL import Image


def authenticateUser(**kwargs):
    username = kwargs['username']
    password = kwargs['password']
    if username and password:
        user = authenticate(username=username, password=password)
        if user:
            return True
        else:
            return False
    else:
        return False

def generateUserToken(**kwargs):
    username = kwargs['username']
    user=AppUser.objects.filter(username=username)
    if user:
        try:
            token=Token.objects.get(user=user)
            token.key=binascii.hexlify(os.urandom(20)).decode()
            token.save()
            user.token=token.key
            user.save()
        except Token.DoesNotExist:
            token=Token.objects.create(user=user)
            user.token=token.key
            user.save()

        


def createAppUser(registerForm, request):
    try:
        date = registerForm.cleaned_data['dateOfBirth']
        appUser = AppUser.objects.create(
            user=createUser(registerForm),
            gender=registerForm.cleaned_data['gender'],
            dateOfBirth=datetime.datetime.strptime(date, "%m/%d/%Y")
        )
        appUser.save()
        if (request.FILES['profilePic']):
            addUserDisplayPic(appUser, request.FILES['profilePic'])
        return appUser.user
    except Exception as e:
        print(e)


def createUser(registerForm):
    try:
        user = User.objects.create_user(username=registerForm.cleaned_data['email'],
                                        email=registerForm.cleaned_data['email'],
                                        password=registerForm.cleaned_data['password'],
                                        first_name=registerForm.cleaned_data['fName'],
                                        last_name=registerForm.cleaned_data['lName']
                                        )
        user.save()
        return user
    except Exception as e:
        print(e)


def addUserDisplayPic(appUser, image):
    try:
        print("=======================================5")
        profileImages = getUserDisplayPicture(appUser)
        if profileImages:
            for image in profileImages:
                image.type = UserImageType.GENERAL
                image.save()
        profileImage = ProfileImage.objects.create(user=appUser, type=UserImageType.PROFILE, image=image).save()
        fild = StringIO.StringIO(profileImage.image.read())
        image = Image.open(fild)

        print("=======================================7")
    except Exception as e:
        print(e)


def getUserDisplayPicture(appUser):
    try:
        print("=======================================6")
        profileImages = ProfileImage.objects.filter(
            user=appUser,
            type=UserImageType.PROFILE
        )
        return profileImages if profileImages else None
    except Exception as e:
        return None
