from django.forms.models import modelformset_factory
from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.views.generic import ListView
from models import Event, EventImage, EventAmenity
from forms import EventForm, EventRuleForm, EventImageForm, EventImage
from contact.forms import *
from event.choices import *
import service as eventService
from django.contrib.auth.decorators import user_passes_test
from tabmgnt.customMixins import SuperuserRequiredMixin
from common.service import google


class AdminIndex(SuperuserRequiredMixin, ListView):
    model = Event
    context_object_name = "events"
    template_name = "index.html"


@user_passes_test(lambda u: u.is_superuser)
def addEvent(request):
    images = request.FILES.getlist('eventImages')
    eventForm = EventForm(request.POST or None)
    eventRuleForm = EventRuleForm(request.POST or None)
    addressForm = AddressForm(request.POST or None)
    contactForm = ContactForm(request.POST or None)
    if eventForm.is_valid() and eventRuleForm.is_valid() and addressForm.is_valid() and contactForm.is_valid():
        event = eventService.createEvent(eventForm, eventRuleForm, addressForm, contactForm)
        if event:
            if (images):
                EventImage.createMultipleInstances(event, images)
            return redirect(reverse("superUser:event:index"))
    else:
        print(contactForm.errors, eventForm.errors, eventRuleForm.errors, addressForm.errors)
    return render(request, "add.html",
                  {'eventForm': eventForm, 'eventRuleForm': eventRuleForm, 'addressForm': addressForm,
                   'contactForm': contactForm})


# Create your views here.

def test(request):
    events = Event.objects.all()
    EventAmenity.objects.all().delete()
    for event in events:
        latitude = event.location.latitude
        longitude = event.location.longitude
        for amenity in AmenityType.googleMapingChoices:
            if amenity[0] in AmenityType.distanceBasedList:
                response = google.nearByPlace(amenity[1], 10000, SearchDistanceFactor.DISTANCE, latitude=latitude,
                                              longitude=longitude)
            else:
                response = google.nearByPlace(amenity[1], 10000, SearchDistanceFactor.RATING, latitude=latitude,
                                              longitude=longitude)

            response = response['results']
            print"============="+str(response)
            for priority, i in enumerate(response):
                address = Address()
                address.line1 = i['name']
                address.line2 = i['vicinity']
                address.latitude = i['geometry']['location']['lat']
                address.longitude = i['geometry']['location']['lng']
                address.save()
                EventAmenity.objects.create(location=address,
                                            type=amenity[0],
                                            event=event,
                                            priority=priority)
