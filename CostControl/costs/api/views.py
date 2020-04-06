from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView, GenericAPIView
from django.db.models import Sum
from rest_framework.response import Response

from .serializers import CostSerializer, CategoriesSerializer, CostReportSerializer
from costs.models import Cost, Category
from datetime import datetime
from django.contrib.auth import get_user_model

User = get_user_model()


def change_user_balance(user_id, cost):
    user = User.objects.get(id=user_id)
    user.balance += cost
    user.save()


class CostViewSet(viewsets.ModelViewSet):
    queryset = Cost.objects.all()
    serializer_class = CostSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        if self.request.method == 'GET':
            date = datetime.today().strftime('%Y-%m-%d')
            query = self.request.GET.get("created_at")
            if query:
                date = query
            return self.request.user.costs.filter(created_at__icontains=date)
        return self.request.user.costs.all()

    def perform_create(self, serializer):
        cost = self.request.data['cost']
        change_user_balance(self.request.user.id, -int(cost))
        serializer.save(owner=self.request.user)

    def destroy(self, request, *args, **kwargs):
        cost = self.get_object()
        change_user_balance(self.request.user.id, cost.cost)
        return super(CostViewSet, self).destroy(self, request, *args, **kwargs)


class CategoryAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer
    permission_classes = [IsAuthenticated, ]


class CostReportView(ListAPIView):
    serializer_class = CostReportSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        date = datetime.today().strftime('%Y-%m')
        query = self.request.GET.get("created_at")
        if query:
            date = query
        query = self.request.user.costs.filter(created_at__icontains=date).values('category').annotate(
            total_cost=Sum('cost')).order_by('-total_cost')
        return query
