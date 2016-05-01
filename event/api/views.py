from rest_framework.generics import ListAPIView
from serializers import EventSerializer

class GetEventList(ListAPIView):
    serializer_class = EventSerializer
