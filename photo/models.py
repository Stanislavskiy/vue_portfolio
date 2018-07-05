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
    image = models.ImageField(
        verbose_name="Фото", blank=False)
    small = models.ImageField(
        verbose_name="Миниатюра", blank=True)
    category = models.ForeignKey(
        Category, verbose_name="Категория", blank=False, on_delete=models.CASCADE)
    order = models.PositiveIntegerField(default=0, blank=False, null=False)

    class Meta(object):
        ordering = ['order']

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        img_io = io.BytesIO()
        basewidth = 500
        img = Image.open(self.image)
        wpercent = (basewidth / float(img.size[0]))
        hsize = int((float(img.size[1]) * float(wpercent)))
        img = img.resize((basewidth, hsize), PIL.Image.ANTIALIAS)
        img.save(img_io, format='JPEG')
        self.small = InMemoryUploadedFile(
            img_io,
            None,
            '{0}_resized.jpg'.format(self.pk), 'image/jpeg',
            img_io.seek(0, os.SEEK_END),
            None
        )

        return super(Photo, self).save(force_insert=False, force_update=False,
                                       using=None, update_fields=None)

    def __str__(self):
        return self.image.url

    def id(self):
        return self.pk

    def image_tag(self):
        return mark_safe('<img src="%s" width="100" />' % self.image.url)

    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True
