from django.shortcuts import render
# 지연 
from .models import Video 

# 지연 : 비디오 재생 페이지를 로드
def videolist(request):
    videos=Video.objects 
    return render(request,'videolist.html',{'videos':videos})