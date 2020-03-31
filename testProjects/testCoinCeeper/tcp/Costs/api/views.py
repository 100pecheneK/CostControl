from django.db.models import Q, Sum
from datetime import datetime
from rest_framework import viewsets
from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from rest_framework.generics import (
    CreateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
    ListAPIView,
)

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

from Costs.models import Cost
from rest_framework.response import Response
from rest_framework.views import APIView

from Costs.choices.cost_type import COST_TYPE
from .pagination import CostLimitOffsetPagination, CostPageNumberPagination
from .permissions import IsOwnerOrReadOnly
from .serializers import (
    CostCreateUpdateSerializer,
    CostDetailSerializer,
    CostListSerializer,
    CostReportSerializer,
)

from django.contrib.auth import get_user_model
User = get_user_model()
ADMIN = User.objects.get(id=1)

class CostCreateAPIView(CreateAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostCreateUpdateSerializer
#     permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=ADMIN)


class CostDetailAPIView(RetrieveAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostDetailSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class CostUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostCreateUpdateSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class CostDeleteAPIView(DestroyAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostDetailSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class PostListAPIView(ListAPIView):
    serializer_class = CostListSerializer

    def get_queryset(self):
        date = datetime.today().strftime('%Y-%m-%d')
        query = self.request.GET.get("date")
        if query:
            date = query
        queryset_list = Cost.objects.filter(user=ADMIN, date__icontains=date).order_by('-id')
        return queryset_list


class CostMonthSumAPIView(APIView):

    def get(self, request):
        date = datetime.today().strftime('%Y-%m')
        query = self.request.GET.get("date")
        if query:
            date = query
        query = Cost.objects.filter(user=ADMIN, date__icontains=date).aggregate(month_money_sum=Sum('money'))
        return Response(query)


class CostReportView(ListAPIView):
    serializer_class = CostReportSerializer

    def get_queryset(self):
        date = datetime.today().strftime('%Y-%m')
        query = self.request.GET.get("date")
        if query:
            date = query
        query = Cost.objects.filter(user=ADMIN, date__icontains=date).values('cost_type').annotate(
            total_money=Sum('money')).order_by('-total_money')
        return query


class CostTypes(APIView):
    def get(self, request):
        cost_types = dict((c_type, c_value) for c_type, c_value in COST_TYPE)
        return Response(cost_types)
