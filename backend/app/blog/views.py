from django.db import models
from rest_framework import serializers
from .models import Post
from .urls import PostViewSet


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
