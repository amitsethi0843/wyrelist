from django import forms
from models import *


class AddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = '__all__'


class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactNumber
        fields = "__all__"
