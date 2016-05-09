from rest_framework import serializers
from appUser.models import AppUser
from appUser.services import authenticateUser, generateUserToken


class UserSerializer(serializers.ModelSerializer):
    retypePassword = serializers.CharField(required=True, max_length=20)
    token = serializers.SerializerMethodField()
    # token=serializers.Field(source="userToken")
    class Meta():
        model = AppUser

    def create(self, validated_data):
        retype = validated_data.pop('retypePassword')
        try:
            user = AppUser.create(validated_data)
            return user
        except Exception as e:
            print(e)

    def get_token(self, obj):
        return obj.auth_token.key

    def validate(self, data):
        if data['password'] != data['retypePassword']:
            raise serializers.ValidationError("Passwords do not match")
        return data


class UserLoginSerializer(serializers.ModelSerializer):
    token = serializers.CharField(allow_blank=True, read_only=True)
    username = serializers.CharField(max_length=50, required=True)

    class Meta:
        model = AppUser
        fields = ('token', 'username', 'password')


    def validate(self, data):
        user = authenticateUser(data)
        if user:
            token = generateUserToken(user)
            data['token'] = token
        return data


class UserEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ('first_name', 'last_name', 'email',)
