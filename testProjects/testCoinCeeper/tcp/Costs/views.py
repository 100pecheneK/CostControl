from django.db.models import Sum
from django.shortcuts import render
from .models import Cost
import datetime


def main(request):
    # Отчёт = Cost.objects.filter(user=user, date=date).values('cost_type').annotate(total_money=Sum('money')).order_by('-total_money')
    # Расходы = Cost.objects.filter(user=user, date=date).aggregate(Sum('money'))
    user = request.user
    date = datetime.datetime.now()
    context = {
        'report': Cost.objects.filter(user=user, date=date).values('cost_type').annotate(
            total_money=Sum('money')).order_by('-total_money'),
        'cost': Cost.objects.filter(user=user, date=date).aggregate(Sum('money')),
        'costs': Cost.objects.filter(user=user, date=date)
    }

    # return render(request, 'Costs/index.html', context)
