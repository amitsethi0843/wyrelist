from rest_framework import serializers
from appUser.models import AppUser
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User


class ClientSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(required=True)

    class Meta(UserSerializer.Meta):
        model = AppUser

    def validate_confirmPassword(self, value):
        if self.password != value:
            raise serializers.ValidationError("Passwords don't match")

    def create(self, validated_data):
        print("fucl")
