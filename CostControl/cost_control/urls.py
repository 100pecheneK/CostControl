from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('costs.api.urls')),
    path('api/user/', include('user_extension.api.urls')),
    path('api/auth/', include('accounts.api.urls')),
    path('admin/', admin.site.urls),
]
