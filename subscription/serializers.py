__author__ = 'amitsethi'
from rest_framework import serializers
from models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription

    # def create(self, validated_data):
    #     print("==================valid")
    #     subscription = Subscription(email=validated_data['email'], name=validated_data['name'],
    #                                 message=validated_data['message'], userType=validated_data['userType'])
    #     subscription.save()
    #     return subscription
#