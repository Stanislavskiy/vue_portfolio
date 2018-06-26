from rest_framework.viewsets import ReadOnlyModelViewSet
from photo.serializers import PhotoSerializer, CategorySerializer
from photo.models import Photo, Category


class PhotoWiewSet(ReadOnlyModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer


class CategoryWiewSet(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
