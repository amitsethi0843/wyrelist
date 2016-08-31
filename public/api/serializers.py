from rest_framework import serializers
from event.models import Event
from event.api.serializers import EventRuleSerializer,UserEventSerializer
from public.models import HomePage


class HomePageEventSerializer(serializers.ModelSerializer):
    eventRule = EventRuleSerializer()
    createdBy = UserEventSerializer()
    event_images=serializers.ReadOnlyField(source='event_normalImages')
    class Meta:
        model = Event
        fields = ('uuid','totalEntries', 'createdBy', 'description',
                  'eventRule','event_images',)


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model=HomePage
        fields=('landingImage','landingImageText')

    # def get_events(self):
    #     return "wtf"
        # query=Event.objects.all().values()
        # serializer=HomePageEventSerializer(query)
        # return serializer.data


