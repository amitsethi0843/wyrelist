from rest_framework.serializers import ModelSerializer
from event.models import *
from contact.serializers import *
from appUser.api.serializers import UserEventSerializer

class EventRuleSerailizer(ModelSerializer):
    class Meta:
        model=EventRule
        fields=("__all__")


class EventSerializer(ModelSerializer):
    location=AddressSerializer(source="location")
    contact_number=ContactNumberSerializer(source="contact_number")
    eventRule=EventRuleSerailizer(source="eventRule")
    createdBy=UserEventSerializer(source="createdBy")

    class Meta:
        model=Event
        fields=('uuid','createdBy','description','location','contact_number',
                'eventRule')


