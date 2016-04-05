from django.shortcuts import render

from rest_framework.views import APIView
from serializers import RestaurantSerializer
from rest_framework.response import Response
from rest_framework import status
from operations import service as appService


class RegisterRestaurant(APIView):
    def post(self, request, format=None):
        print("--------------1------------------")
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            print("--------------2------------------")
            serializer.save()
            try:
                appService.createToken(serializer.validated_data)
            except Exception as e:
                print(e)
            return Response({'success': True}, status=status.HTTP_201_CREATED)
        else:
            print("--------------3------------------")

            print(serializer.errors)
        return Response({'error': True}, status=status.HTTP_400_BAD_REQUEST)


        # def get(self, request, format=None):
        #     serializer = RestaurantSerializer(data=request.data)
        #     if serializer.is_valid():
        #         serializer.save()
        #     else:
        #         print(serializer.errors)
        #
        #     return Response({'success': True}, status=status.HTTP_201_CREATED)

        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#
# Create your views here.
