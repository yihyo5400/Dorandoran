# 지연
from django.db import models
# title / date / video / body / link : video는 뭐쥬?

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=200) # 영상 제목
    body = models.TextField() # 영상 내용
    date = models.DateTimeField(auto_now=True) # 게시 날짜
    video_key=models.CharField(max_length=50, null=True) # 비디오 링크
    
    def __str__(self):
        return self.title
    
    def summary(self):
        return self.body[:50]