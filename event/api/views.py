from rest_framework.generics import ListAPIView,RetrieveAPIView
from rest_framework.views import APIView
from serializers import EventSerializer
from event.models import Event
from rest_framework.response import Response


class GetEventList(ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

class GetEvent(RetrieveAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    lookup_field = "uuid"
    lookup_url_kwarg = "eventId"

