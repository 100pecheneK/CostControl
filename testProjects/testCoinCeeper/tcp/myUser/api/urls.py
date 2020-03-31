from django.urls import path
from .views import (
    BalanceAPIView,
)

app_name = 'myUser-api'
urlpatterns = [
    path('balance/', BalanceAPIView.as_view(), name='balance'),
]
