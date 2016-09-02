from rest_framework import serializers
from event.models import Event
from event.api.serializers import EventRuleSerializer,UserEventSerializer
from public.models import HomePage,SiteInfo


class HomePageEventSerializer(serializers.ModelSerializer):
    eventRule = EventRuleSerializer()
    createdBy = UserEventSerializer()
    event_images=serializers.ReadOnlyField(source='event_normalImages')
    class Meta:
        model = Event
        fields = ('uuid','totalEntries', 'createdBy', 'description',
                  'eventRule','event_images',)



class SiteInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=SiteInfo
        fields=('image','text')

class HomePageSerializer(serializers.ModelSerializer):
    siteInfos=SiteInfoSerializer(many=True,read_only=True)
    class Meta:
        model=HomePage
        fields=('landingImage','landingImageText','siteInfos')


    # def get_events(self):
    #     return "wtf"
        # query=Event.objects.all().values()
        # serializer=HomePageEventSerializer(query)
        # return serializer.data


