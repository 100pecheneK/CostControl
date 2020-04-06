from django.contrib.auth import get_user_model
from rest_framework.fields import HiddenField, CurrentUserDefault, IntegerField
from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField,
    Field,
)

from Costs.models import Cost

from Costs.choices.cost_type import COST_TYPE

User = get_user_model()


class CostCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Cost
        fields = [
            'money',
            'cost_type'
        ]


class CarDetailSerializer(ModelSerializer):
    user = SerializerMethodField()

    class Meta:
        model = Cost
        fields = '__all__'

    def get_user(self, obj):
        return str(obj.user.username)

class CostDetailSerializer(ModelSerializer):
    user = SerializerMethodField()
    cost_type = SerializerMethodField()

    class Meta:
        model = Cost
        fields = '__all__'

    def get_user(self, obj):
        return str(obj.user.username)

    def get_cost_type(self, obj):
        return obj.get_cost_type_display()


class CostListSerializer(ModelSerializer):
    cost_type = SerializerMethodField()

    class Meta:
        model = Cost
        fields = [
            'id',
            'money',
            'cost_type',
            'date'
        ]

    def get_cost_type(self, obj):
        return obj.get_cost_type_display()


class CostReportSerializer(ModelSerializer):
    cost_type = SerializerMethodField()
    total_money = IntegerField()

    class Meta:
        model = Cost
        fields = [
            'cost_type',
            'total_money'
        ]

    def get_cost_type(self, obj):

        for c_type in COST_TYPE:
            if c_type[0] == obj['cost_type']:
                cost_type = c_type[1]
                break

        return cost_type

