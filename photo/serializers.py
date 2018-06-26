from rest_framework.serializers import ModelSerializer
from photo.models import Photo, Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')


class PhotoSerializer(ModelSerializer):
    class Meta:
        model = Photo
        fields = ('image', 'category', 'order')
