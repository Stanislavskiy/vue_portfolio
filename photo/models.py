from django.db import models
from django.utils.html import mark_safe


class Category(models.Model):
    name = models.CharField(
        verbose_name="Название категории", max_length=50, blank=False)

    def __str__(self):
        return self.name


class Photo(models.Model):
    image = models.ImageField(
        verbose_name="Фото", blank=False)
    category = models.ForeignKey(
        Category, verbose_name="Категория", blank=False, on_delete=models.CASCADE)
    order = models.PositiveIntegerField(default=0, blank=False, null=False)

    class Meta(object):
        ordering = ['order']

    def __str__(self):
        return self.image.url

    def image_tag(self):
        return mark_safe('<img src="%s" width="100" />' % self.image.url)

    image_tag.short_description = 'Миниатюра'
    image_tag.allow_tags = True
