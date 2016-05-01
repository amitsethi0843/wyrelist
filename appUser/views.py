from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from appUser.api.serializers import *
from services import authenticateUser,generateUserToken


# Create your views here.

class RegisterUser(APIView):
    try:
        def post(self, request, format=None):
            print("========================1========1")
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'token': serializer.data['token'], 'user   name': serializer.data['username']},
                                status=status.HTTP_201_CREATED)
            else:
                print(serializer.errors)
                return Response({'error': "Couldn't register user"}, status=status.HTTP_401_UNAUTHORIZED)

    except Exception as e:
        print(e)


class LoginUser(APIView):
    def post(self, request, format=None):
        try:
            serializer = UserLoginSerializer(data=request.data)
            if serializer.is_valid():
                userValid = authenticateUser(dict(serializer.data))
                if userValid:
                    generateUserToken(serializer.data)
        except Exception as e:
            print(e)

