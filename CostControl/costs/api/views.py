from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from django.db.models import Sum
from .serializers import CostSerializer, CategoriesSerializer, CostReportSerializer
from costs.models import Cost, Category
from datetime import datetime


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
