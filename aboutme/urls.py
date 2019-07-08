from django.urls import path

from . import views

app_name = 'aboutme'
urlpatterns = [
    path('', views.index, name='index'),
    path('aboutme/home/', views.home, name='home'),
    path('aboutme/samples/', views.samples, name='samples'),
    path('aboutme/about/', views.about, name='about'),
]