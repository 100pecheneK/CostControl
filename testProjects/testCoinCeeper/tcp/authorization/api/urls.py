from django.urls import path
from .views import current_user, UserList
from rest_framework_jwt.views import obtain_jwt_token

app_name = 'authorization-api'
urlpatterns = [
    path('token-auth/', obtain_jwt_token),
    path('current_user/', current_user, name='current_user'),
    path('signup/', UserList.as_view(), name='signup')
]
