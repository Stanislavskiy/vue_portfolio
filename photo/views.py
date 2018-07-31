from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.decorators import action
from photo.serializers import PhotoSerializer, CategorySerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
import random

from photo.models import Photo, Category


class PhotoWiewSet(ReadOnlyModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

    @action(methods=['get'], detail=False)
    def by_category(self, request):
        """
        Получить страницу по аттрибуту "url"
        """
        category_name = request.GET.get('category')
        category = get_object_or_404(Category, en=category_name)
        if category.en == "all":
            photos = Photo.objects.order_by('?')
        else:
            photos = Photo.objects.filter(category=category)
        serializer = self.get_serializer(photos, many=True)

        return Response(serializer.data)


class CategoryWiewSet(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
