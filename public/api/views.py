from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.status import HTTP_200_OK
from rest_framework.views import APIView
from .serializers import HomePageSerializer,HomePageEventSerializer
from public.models import HomePage
from event.models import Event


class GetLandingInstance(GenericAPIView):
    def get(self, request, *args, **kwargs):
            homePage=HomePage.objects.filter(enabled=True).first()
            events=Event.objects.all().order_by("-dateCreated")[:3]
            homePageSerializer=HomePageSerializer(homePage)
            eventSerializer=HomePageEventSerializer(events,many=True)
            response=dict()
            response['event']=eventSerializer.data
            response['homePage']=homePageSerializer.data
            return Response(response,status=HTTP_200_OK)

