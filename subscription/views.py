from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from rest_framework.views import APIView
from serializers import *
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404




class CreateSubscription(APIView):
    # serializer_class = SubscriptionSerializer
    # def get_object(self, pk):
    #     try:
    #         return Subscription.objects.get(pk=pk)
    #     except Subscription.DoesNotExist:
    #         raise Http404

    def post(self, request,format=None):
        serializer = SubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success':True}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def put(self, request, pk, format=None):
    #     subscription = self.get_object(pk)
    #     serializer = SubscriptionSerializer(subscription,data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(list(serializer.errors), status=status.HTTP_400_BAD_REQUEST)
        #     serializer.save()
        #     print(serializer.data)
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # else:
        #     print("===========================invalid")
        #     print(serializer.errors)
