from rest_framework.serializers import ModelSerializer
from .models import *

class AddressSerializer(ModelSerializer):

    class Meta:
        model=Address
        fields=("__all__")

class ContactNumberSerializer(ModelSerializer):

    class Meta:
        model=ContactNumber
        fields=("__all__")