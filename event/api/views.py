from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from serializers import EventSerializer
from event.models import Event
from rest_framework.response import Response


class GetEventList(ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()