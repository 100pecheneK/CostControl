from django.urls import path
from .views import (
    CostCreateAPIView,
    CostDetailAPIView,
    CostUpdateAPIView,
    CostDeleteAPIView,
    PostListAPIView,
    CostMonthSumAPIView,
    CostReportView,
    CostTypes,
)

app_name = 'cost-api'
urlpatterns = [
    path('', PostListAPIView.as_view(), name='list'),

    path('create/', CostCreateAPIView.as_view(), name='create'),
    path('<int:pk>/', CostDetailAPIView.as_view(), name='detail'),
    path('<int:pk>/update', CostUpdateAPIView.as_view(), name='update'),
    path('<int:pk>/delete', CostDeleteAPIView.as_view(), name='delete'),

    path('costMonthSum/', CostMonthSumAPIView.as_view(), name='costMonthSum'),
    path('costReport/', CostReportView.as_view(), name='costReport'),
    path('costTypes/', CostTypes.as_view(), name='costTypes'),
]
