from django.urls import path

from .views import index

urlpatterns = [
    path('', index),
    path('create/', index),
    path('report/', index),
    path('register/', index),
    path('login/', index),
]
