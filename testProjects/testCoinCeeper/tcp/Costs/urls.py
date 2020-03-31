from django.urls import path
from .views import (
    main,
)

app_name = 'Costs'
urlpatterns = [
    path('', main, name='main')
]
