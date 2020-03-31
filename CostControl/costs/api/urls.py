from rest_framework import routers
from django.urls import path

from .views import (
    CostViewSet,
    CategoryAPIView,
    CostReportView
)

router = routers.DefaultRouter()
router.register('costs', CostViewSet, 'costs')
urlpatterns = [
    path('categories/', CategoryAPIView.as_view(), name='categories'),

    path('costReport/', CostReportView.as_view(), name='costReport'),
    #     # path('costMonthSum/', CostMonthSumAPIView.as_view(), name='costMonthSum'),
    #     # path('costTypes/', CostTypes.as_view(), name='costTypes'),
]
urlpatterns += router.urls
