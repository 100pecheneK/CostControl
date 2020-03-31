from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    PrimaryKeyRelatedField
)
from rest_framework.fields import IntegerField

from costs.models import Cost, Category
from .utils import DefaultModelSerializer


class CategoriesSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CostSerializer(ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )

    class Meta:
        model = Cost
        fields = '__all__'


class CostReportSerializer(ModelSerializer):
    total_cost = IntegerField()
    category = SerializerMethodField()

    class Meta:
        model = Cost
        fields = [
            'category',
            'total_cost'
        ]

    def get_category(self, obj):

        for category in Category.objects.all():
            if category.id == obj['category']:
                return category.category
