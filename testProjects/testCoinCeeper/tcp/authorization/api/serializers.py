from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    CharField)
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)


class UserSerializerWithToken(ModelSerializer):

    token = SerializerMethodField()
    print(f'token - {token}')
    password = CharField(write_only=True)
    print(f'password - {password}')

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        print(f'jwt_payload_handler - {jwt_payload_handler}')
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        print(f'jwt_encode_handler - {jwt_encode_handler}')

        payload = jwt_payload_handler(obj)
        print(f'payload - {payload}')
        token = jwt_encode_handler(payload)
        print(f'token - {token}')
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        print(f'password - {password}')
        instance = self.Meta.model(**validated_data)
        print(f'instance - {instance}')
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')
