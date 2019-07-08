from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    
    return render(request, 'aboutme/index.html')

def home(request):
    return HttpResponse("Home page.")

def samples(request):
    return HttpResponse("Sample Work page.")
    
def about(request):
    return HttpResponse("About page.")