from .models import *
from django import forms


def createHomePage(homePageForm, siteInfoFormSet):
    try:
        homePage=HomePage.saveFromForm(homePageForm)
        for siteInfoForm in siteInfoFormSet:
            if siteInfoForm.is_valid():
                createSiteInfoInstance(siteInfoForm, homePage)

        return homePage
    except Exception as e:
        print(e)

def createSiteInfoInstance(siteInfoForm, homePage):
    siteInfo = SiteInfo(homePage=homePage,
                        image=siteInfoForm.cleaned_data['image'],
                        text=siteInfoForm.cleaned_data['text']).save()
    return siteInfo
