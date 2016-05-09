from rest_framework.serializers import ModelSerializer
from event.models import *
from contact.serializers import *
from appUser.api.serializers import UserEventSerializer


class EventRuleSerailizer(ModelSerializer):
    class Meta:
        model = EventRule
        exclude = ('id',)


class EventSerializer(ModelSerializer):
    location = AddressSerializer()
    contact_number = ContactNumberSerializer(many=True,required=False)
    eventRule = EventRuleSerailizer()
    createdBy = UserEventSerializer()

    class Meta:
        model = Event
        fields = ('uuid', 'createdBy', 'description', 'location', 'contact_number',
                  'eventRule',)
