from rest_framework.views import APIView
from .serializers import HomePageSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST


class GetLandingInstance(APIView):

    def get(self,*args, **kwargs):
        try:
            serializer = HomePageSerializer
            if serializer.is_valid:
                validated_data=serializer.validated_data
                return Response(validated_data,status=HTTP_200_OK)
            return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)