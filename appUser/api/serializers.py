from rest_framework import serializers
from appUser.models import AppUser



class UserSerializer(serializers.ModelSerializer):
    retypePassword=serializers.CharField(required=True,max_length=20)
    class Meta():
        model = AppUser

    def __init__(self, *args, **kwargs):
        super(UserSerializer, self).__init__(*args, **kwargs)
        self.fields['username'].error_messages['required'] = u'My custom required msg'


    def create(self, validated_data):
        validated_data.pop('retypePassword')
        print("============="+str(validated_data))
        try:
            user = AppUser.create(validated_data)
            return user
        except Exception as e:
            print(e)
            return {"error":"Couldn't create user"}

    def validate(self, data):
        if data['password'] != data['retypePassword']:
            raise serializers.ValidationError("Passwords do not match")
        return data

class UserLoginSerializer(serializers.ModelSerializer):
    username=serializers.CharField(max_length=50,required=True)
    password=serializers.CharField(max_length=20,required=True)

class UserEventSerializer(serializers.ModelSerializer):
    class Meta:
        model=AppUser
        fields=('first_name','last_name','email')

    
