from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView
from django.db.models import Sum
from rest_framework.response import Response
from datetime import datetime
from django.contrib.auth import get_user_model

User = get_user_model()


class MoneyInfoAPIView(GenericAPIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        balance = self.request.user.balance

        date = datetime.today().strftime('%Y-%m')
        query = self.request.GET.get("created_at")
        if query:
            date = query
        month_cost = self.request.user.costs.filter(created_at__icontains=date).aggregate(month_cost=Sum('cost'))[
            'month_cost']
        if not month_cost:
            month_cost = 0

        return Response({
            'balance': balance,
            'month_cost': month_cost
        })


class BalanceAddAPIView(GenericAPIView):
    permission_classes = [IsAuthenticated, ]

    def post(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        user.balance += int(request.data['balance'])
        user.save()
        return Response({
            "balance": user.balance
        })
