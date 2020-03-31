from django.db import models
from model_utils import Choices
from django.contrib.auth import get_user_model

User = get_user_model()


class Category(models.Model):
    category = models.CharField(max_length=100)
    icon = models.CharField(max_length=100)

    def __str__(self):
        return self.category


class Cost(models.Model):
    owner = models.ForeignKey(User, related_name="costs", on_delete=models.CASCADE, null=True)
    cost = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.cost)
