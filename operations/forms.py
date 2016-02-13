from django import forms
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


class registerForm(forms.Form):
    email = forms.EmailField(required=True, max_length=70, widget=forms.EmailInput(
        attrs={'class': 'form-control', 'placeholder': 'Your email address'}),
                             error_messages={'required': "Please enter your email id"})
    fName = forms.CharField(required=True, max_length=20,
                            error_messages={'required': "Please enter your first name"})
    lName = forms.CharField(required=True, max_length=20,
                            error_messages={'required': "Please enter your last name"})
    profilePic=forms.ImageField(required=False)
    gender = forms.CharField(required=False, max_length=20)
    dateOfBirth=forms.CharField(required=False,max_length=20)
    location = forms.CharField(required=False, max_length=20)
    latitude = forms.FloatField(required=False)
    longitude = forms.FloatField(required=False)
    state = forms.CharField(required=False, max_length=20)
    city = forms.CharField(required=False, max_length=20)
    password = forms.CharField(required=True, max_length=20,
                               error_messages={'required': "Please enter your password"})
    confirmPassword = forms.CharField(max_length=20, required=True,
                                      error_messages={'required': "Please re-enter your password"})

    def clean(self):
        password1 = self.cleaned_data.get('password')
        password2 = self.cleaned_data.get('confirmPassword')
        if password1 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return self.cleaned_data

    def clean_email(self):
        username = self.cleaned_data['email']
        try:
            user = User.objects.get(username=username)
            print(user)
        except User.DoesNotExist:
            return username
        raise forms.ValidationError("User already Exists")

    # def clean_location(self):
    #     location = self.cleaned_data['location']
    #     latitude = self.cleaned_data['latitude']
    #     longitude = self.cleaned_data['longitude']
    #     if location and (not latitude or not longitude):
    #         raise forms.ValidationError("Please enter location available in auto complete only")


class loginForm(forms.Form):
    username = forms.EmailField(max_length=70, widget=forms.EmailInput(
        attrs={'class': 'form-control', 'placeholder': 'Your email address'}),
                                error_messages={'required': 'Please enter your email id'})
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Create Password'}),
        error_messages={'required': "Please enter your password"})

    def clean(self):
        username = self.cleaned_data['username']
        password = self.cleaned_data['password']
        user = authenticate(username=username, password=password)
        if user is None:
            raise forms.ValidationError("You have entered wrong username or password")
