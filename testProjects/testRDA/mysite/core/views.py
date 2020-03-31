from .serializers import UserSerializer, UserSerializerWithToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST


@api_view(['GET'])
def current_user(request):

    serializer = UserSerializer(request.user)
    print(f'serializer(current_user) - {serializer}')
    return Response(serializer.data)


class UserList(APIView):

    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        print(f'serializer(UserList) - {serializer}')
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
