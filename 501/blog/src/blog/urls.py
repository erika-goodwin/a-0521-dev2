from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.home, name='homepage')
]
    # path('/addpost', views.add, name='homepage')
