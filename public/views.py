from django.contrib.auth.decorators import user_passes_test
from django.core.urlresolvers import reverse
from django.shortcuts import render, redirect
from tabmgnt.customMixins import SuperuserRequiredMixin
from django.views.generic import ListView
from .models import HomePage
from django.forms import formset_factory
from .forms import *
from .choices import HomePageStatusType
import public.service as publicService


class HomePageIndex(SuperuserRequiredMixin, ListView):
    model = HomePage
    context_object_name = "homePage"
    template_name = "homePageIndex.html"


@user_passes_test(lambda u: u.is_superuser)
def addHomePage(request):
    homePageForm = HomePageForm(request.POST, request.FILES)
    siteInfoFormSet = formset_factory(SiteInfoForm, extra=3, max_num=3)
    if homePageForm.is_valid():
        publicService.createHomePage(homePageForm, siteInfoFormSet)
        return redirect(reverse("superUser:public:homePageIndex"))
    return render(request, "addHomePage.html", {"homePageForm": homePageForm, "siteInfoFormSet": siteInfoFormSet})


@user_passes_test(lambda u: u.is_superuser)
def changeStatus(request):
    status=request.GET.get("status")
    id=request.GET.get("id")
    print(status)
    print(HomePageStatusType.ENABLE)

    if status==HomePageStatusType.ENABLE:
        HomePage.enable(id)
    else:
        HomePage.disable(id)
    return redirect(reverse("superUser:public:homePageIndex"))
