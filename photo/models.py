from django.db import models
from django.utils.html import mark_safe
import PIL
from PIL import Image
import os
from django.core.files.base import ContentFile
import io
from django.core.files.uploadedfile import InMemoryUploadedFile
# from kruglyak_portfolio.settings import


class Category(models.Model):
    name = models.CharField(
        verbose_name="Название категории", max_length=50, blank=False)

    def __str__(self):
        return self.name


class Photo(models.Model):
    image = models.CharField(
        verbose_name="Ссылка на фото", max_length=1000, blank=False)
    category = models.ForeignKey(
        Category, verbose_name="Категория", blank=False, on_delete=models.CASCADE)
    order = models.PositiveIntegerField(default=0, blank=False, null=False)

    class Meta(object):
        ordering = ['order']

    def __str__(self):
        return self.image

    def id(self):
        return self.pk

    def image_tag(self):
        return mark_safe('<img src="%s" width="100" />' % self.image)

    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True
