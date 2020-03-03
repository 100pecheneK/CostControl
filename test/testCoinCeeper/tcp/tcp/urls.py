from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/costs/', include('Costs.api.urls')),
    path('api/user/', include('myUser.api.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
