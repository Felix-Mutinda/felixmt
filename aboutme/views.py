from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    
    return render(request, 'aboutme/index.html')

def home(request):
    return render(request, 'aboutme/home_content.html')

def samples(request):
    return render(request, 'aboutme/sample_work.html')
    
def about(request):
    return render(request, 'aboutme/about_page.html')