from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
)


class CostLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 10


class CostPageNumberPagination(PageNumberPagination):
    page_size = 10
