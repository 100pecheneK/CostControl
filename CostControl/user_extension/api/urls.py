from django.urls import path

from .views import MoneyInfoAPIView, BalanceAddAPIView

app_name = 'api-user'
urlpatterns = [
    path('money_info', MoneyInfoAPIView.as_view(), name='money_info'),
    path('add_balance', BalanceAddAPIView.as_view(), name='add_balance')
]
