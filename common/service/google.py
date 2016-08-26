from common.service import apiRequests as apiService
from tabmgnt.settings import GOOGLE_API_KEY
from event.choices import SearchDistanceFactor
from tabmgnt import config

def nearByPlace(type, radius, distanceFactor, **location):
    placeUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
    params = dict()


    if location.has_key('latitude') and location.has_key('longitude'):
        latitude = location['latitude']
        longitude = location['longitude']
        params['location'] = str(latitude) + "," + str(longitude)
        params['type'] = type
        if distanceFactor == SearchDistanceFactor.RATING:
            params['radius'] = radius if radius else 100000
        elif distanceFactor == SearchDistanceFactor.DISTANCE:
            params['rankby'] = "distance"
        params['key']=config.GOOGLE_API_SERVER_KEY
        params['sensor']="true"
        response = apiService.getData(placeUrl, params)
        print"-------------"+str(response)
        return response
