from django.urls import path

from .views import MoneyInfoAPIView

app_name = 'api-user'
urlpatterns = [
    path('money_info/', MoneyInfoAPIView.as_view(), name='money_info'),
]
