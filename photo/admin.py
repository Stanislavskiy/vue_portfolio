from django.contrib import admin
from photo.models import Photo, Category
from adminsortable2.admin import SortableAdminMixin


@admin.register(Photo)
class PhotoAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('id', 'image', 'small', 'image_tag', 'category')
    list_filter = ('category',)
    fields = ('image', 'category', 'image_tag')
    readonly_fields = ('image_tag',)


admin.site.register(Category)
