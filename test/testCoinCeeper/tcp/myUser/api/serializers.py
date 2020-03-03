from django.contrib.auth import get_user_model
from rest_framework.serializers import (
    ModelSerializer
)

User = get_user_model()


class BalanceDetailSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'balance',
        ]
