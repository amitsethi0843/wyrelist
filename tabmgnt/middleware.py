from django.db import connection
from time import time
from operator import add
from django import http
import re


class StatsMiddleware(object):
    def __init__(self):
        pass

    # middleware or filters being used for printing out parameters passed from front end to the public/views
    def process_request(self, request):
        for i in request.GET:
            print ('=====GET', i, request.GET.get(i))

        for i in request.POST:
            print ('=====POST', i, request.POST.get(i))
            # response = http.HttpResponse()
            # return response
            # def process_response(self, request, response):
            # response['Access-Control-Allow-Origin'] = "*"
            # response['Access-Control-Allow-Credentials']="true"
            # response['Access-Control-Allow-Headers']="x-requested-with, content-type, accept, origin, authorization, x-csrftoken, user-agent, accept-encoding"
            # response['Access-Control-Allow-Methods']="POST, GET, PUT, OPTIONS, DELETE"
            # response["Access-Control-Max-Age"]="86400"
