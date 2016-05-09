from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from .serializers import UserSerializer, UserLoginSerializer
from appUser.services import authenticateUser, generateUserToken
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST


class CreateUser(CreateAPIView):
    serializer_class = UserSerializer


class LoginUser(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            serializer = UserLoginSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                validated_data=serializer.data
                password=validated_data.pop("password")
                return Response(validated_data,status=HTTP_200_OK)
            return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            # user = authenticateUser(serializer.data)
            # if user:
            #     token = generateUserToken(user)
            #     response = Response()
            #     response['username'] = user.username
            #     response['token'] = token.key
            #     print(user.username, token.key)
            #     return user
