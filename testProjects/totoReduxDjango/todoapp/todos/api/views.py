from rest_framework.viewsets import (
    ModelViewSet,
)
from rest_framework.permissions import (
    IsAuthenticated,
)
from .serializers import TodoSerializer
from datetime import datetime


class TodoViewSet(ModelViewSet):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        if self.request.method == 'GET':
            date = datetime.today().strftime('%Y-%m-%d')
            query = self.request.GET.get("date")
            if query:
                date = query
            return self.request.user.todos.filter(created_at__icontains=date).order_by('-id')
        return self.request.user.todos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TodoReportViewSet(ModelViewSet):
    serializer_class = TodoSerializer

    def get_queryset(self):
        return self.request.user.todos.all()
