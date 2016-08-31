from django import forms
from .models import *

class HomePageForm(forms.ModelForm):
    class Meta:
        model=HomePage
        fields = '__all__'
        widgets={
            "landingImageText":forms.Textarea(attrs={'rows': 5})
        }

class SiteInfoForm(forms.ModelForm):
    class Meta:
        model=SiteInfo
        fields=('image','text',)