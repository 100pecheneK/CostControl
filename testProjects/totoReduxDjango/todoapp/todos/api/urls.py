from rest_framework import routers

from .views import TodoViewSet, TodoReportViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, 'todos')
# router.register('todosReport', TodoReportViewSet, 'todosReport')

urlpatterns = router.urls
