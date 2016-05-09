from rest_framework.serializers import ModelSerializer
from .models import *

class AddressSerializer(ModelSerializer):

    class Meta:
        model=Address
        exclude = ('id',)

class ContactNumberSerializer(ModelSerializer):

    class Meta:
        model=ContactNumber
        exclude = ('id',)