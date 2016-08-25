from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from event.models import *
from contact.serializers import *
from appUser.api.serializers import UserEventSerializer


class EventRuleSerializer(ModelSerializer):
    class Meta:
        model = EventRule
        exclude = ('id',)


class EventCreateSerializer(ModelSerializer):
    location = AddressSerializer()
    contact_number = ContactNumberSerializer(many=True,required=False)
    eventRule = EventRuleSerializer()
    createdBy = serializers.EmailField(required=True)
    class Meta:
        model = Event
        fields = ('uuid','totalEntries', 'createdBy', 'description', 'location', 'contact_number',
                  'eventRule',)


class EventSerializer(ModelSerializer):
    location = AddressSerializer()
    contact_number = ContactNumberSerializer(many=True,required=False)
    eventRule = EventRuleSerializer()
    createdBy = UserEventSerializer()
    event_images=serializers.ReadOnlyField(source='event_normalImages')
    nearby_locations=serializers.ReadOnlyField()
    class Meta:
        model = Event
        fields = ('uuid','totalEntries', 'createdBy', 'description', 'location', 'contact_number',
                  'eventRule','event_images','nearby_locations',)

class EventTicketSerializer(ModelSerializer):
    class Meta:
        models=EventTicket
        include=('totalTickets',)


