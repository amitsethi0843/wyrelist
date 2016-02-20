from django.shortcuts import render, redirect
from .forms import loginForm, registerForm
import appUser.services as userService

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.core.urlresolvers import reverse
from rest_framework import generics
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect
import logging
from bootstrap import *

log = logging.getLogger(__name__)


def registerUser(request):
    if not request.user.is_authenticated():
        form = registerForm(request.POST or request.FILES or None)
        if form.is_valid():
            print("=======================================1")
            user = userService.createAppUser(form,request)
            user.backend = 'django.contrib.auth.backends.ModelBackend'
            login(request, user)
            return redirect(reverse('ops:landing'))
        else:
            log.error("===========user registeration validation failed"+str(form.errors))
        return render(request, "signup/signUp.html", {"form": form})
    else:
        return redirect(reverse('ops:landing'))


def loginUser(request):
    if not request.user.is_authenticated():
        current = request.GET.get('current') if request.GET.get('current') else request.POST.get('current')
        print(current)
        form = loginForm(request.POST or None)

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponseRedirect(current)
        return render(request, 'login/login.html', {'form': form, 'current': current})
    else:
        return redirect(reverse('ops:landing'))


def logoutUser(request):
    # this action is being used to logout user
    logout(request)
    return redirect(reverse('ops:landing'))

def bootStrap(request):
    createGroupsAndPermissions()

class About(TemplateView):
    template_name = "general/about.html"

class Landing(TemplateView):
    template_name = "landing/landing.html"
