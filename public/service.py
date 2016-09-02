from .models import *
from django import forms


def createHomePage(homePageForm):
    try:
        homePage = HomePage.saveFromForm(homePageForm)
        return homePage
    except Exception as e:
        print(e)


def createSiteInfos(siteInfoFormSet, homePage):
    for form in siteInfoFormSet:
        if form.cleaned_data['image']:
            SiteInfo(homePage=homePage,
                     image=form.cleaned_data['image'],
                     text=form.cleaned_data['text']).save()
