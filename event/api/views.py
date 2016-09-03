from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.views import APIView
from serializers import EventSerializer, EventCreateSerializer
from event.models import Event
from event.api.filters import EventFilter
from rest_framework.permissions import IsAuthenticated

class GetEventList(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    filter_class = EventFilter


class GetEvent(RetrieveAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    lookup_field = "uuid"
    lookup_url_kwarg = "eventId"


class CreateEvent(CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventCreateSerializer
