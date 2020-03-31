from django.urls import path, include
from knox.views import LogoutView
from .views import UserAPIVIew, RegisterAPIView, LoginAPIVIew

urlpatterns = [
    path('', include('knox.urls')),
    path('user', UserAPIVIew.as_view()),
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIVIew.as_view()),
    path('logout', LogoutView.as_view(), name='knox_logout'),
]
