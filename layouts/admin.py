from layouts.models import Layout
from django.contrib import admin

class LayoutAdmin(admin.ModelAdmin):
  list_display = ('name', 'slug', 'created_date')

admin.site.register(Layout, LayoutAdmin)
