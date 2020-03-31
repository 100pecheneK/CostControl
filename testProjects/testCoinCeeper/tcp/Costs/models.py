from django.db import models
from django.contrib.auth import get_user_model
from .choices.cost_type import COST_TYPE

User = get_user_model()


class Cost(models.Model):
    money = models.IntegerField(verbose_name='money')
    cost_type = models.IntegerField(choices=COST_TYPE, verbose_name='costType', default=1)
    date = models.DateField(auto_now=True, verbose_name='costDate')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='user')
