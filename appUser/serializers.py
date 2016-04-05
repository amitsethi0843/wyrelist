from rest_framework import serializers
from appUser.models import AppUser


class UserSerializer(serializers.ModelSerializer):

    class Meta():
        model = AppUser

    def create(self, validated_data):
        try:
            user = AppUser.create(validated_data)
            return user
        except Exception as e:
            print(e)

    def validate(self, data):
        if data['password'] != data['retypePassword']:
            raise serializers.ValidationError("Passwords do not match")
        return data

class UserLoginSerializer(serializers.ModelSerializer):
    username=serializers.CharField(max_length=50,default="abc.gmail.com",required=True)
    password=serializers.CharField(max_length=20,default=1234,required=True)
