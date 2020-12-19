from django.urls import path
from . import views

urlpatterns = [
    #Index page of site
    path('', views.index, name='index'),
]
