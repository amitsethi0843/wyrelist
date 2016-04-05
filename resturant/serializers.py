from models import Restaurant
from rest_framework import serializers


class RestaurantSerializer(serializers.ModelSerializer):
    try:
        retypePassword = serializers.CharField(required=True,max_length=20)

        class Meta():
            model = Restaurant

        def create(self, validated_data):
            restaurant = Restaurant(
                username=validated_data['username'],
                email=validated_data['email'],
                password=validated_data['password'],
                restaurantName=validated_data['restaurantName'],
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name']
            )
            restaurant.save()
            return restaurant

        def validate(self, data):
            if data['password'] != data['retypePassword']:
                raise serializers.ValidationError("Passwords do not match")
            return data
    except Exception as e:
        print(e)
