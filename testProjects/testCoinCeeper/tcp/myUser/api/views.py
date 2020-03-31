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

from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model

from Costs.api.permissions import IsOwnerOrReadOnly

from .serializers import (
    BalanceDetailSerializer
)

User = get_user_model()


class BalanceAPIView(ListAPIView):
    serializer_class = BalanceDetailSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        query = User.objects.filter(username=self.request.user)
        return query
