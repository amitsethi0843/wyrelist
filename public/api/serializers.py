from django.forms.models import model_to_dict
from rest_framework import serializers
from event.models import Event
from event.api.serializers import EventRuleSerializer,UserEventSerializer


class HomePageSerializer(serializers.Serializer):
    events="Dsdffsg"
    # def get_events(self):
    #     return "wtf"
        # query=Event.objects.all().values()
        # serializer=HomePageEventSerializer(query)
        # return serializer.data



class HomePageEventSerializer(serializers.ModelSerializer):
    eventRule = EventRuleSerializer()
    createdBy = UserEventSerializer()
    event_images=serializers.ReadOnlyField(source='event_normalImages')
    class Meta:
        model = Event
        fields = ('uuid','totalEntries', 'createdBy', 'description',
                  'eventRule','event_images',)
