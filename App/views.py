from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from django.contrib.contenttypes.models import ContentType
import json
from .forms import StoriesForm

from App.models import Story


def index(request):
    return render(request, "index.html")


def about(request):
    return render(request, "About.html")


def autorization(request):
    return render(request, "Authorization.html")


def registration(request):
    return render(request, "Registration.html")


def library(request):
    stories = Story.objects.all()
    return render(request, "Library.html",{'stories' : stories})


def newStory(request):
    if request.method == "POST":
        form = StoriesForm(request.POST)
        form.save()
    form = StoriesForm()
    data = {
        'form': form
    }
    return render(request, "NewStory.html", data)