from django.db import connection
from time import time
from operator import add
import re

class StatsMiddleware(object):
    def __init__(self):
        pass
    # middleware or filters being used for printing out parameters passed from front end to the public/views
    def process_request(self, request):
        for i in request.GET:
            print ('=====GET',i,request.GET.get(i))

        for i in request.POST:
            print ('=====POST',i,request.POST.get(i))
