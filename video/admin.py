from django.contrib import admin

# Register your models here.
# 지연
from .models import Video
admin.site.register(Video)