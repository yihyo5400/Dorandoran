from django.shortcuts import render,get_object_or_404
# 지연 
from .models import Video 


# 지연 : 비디오 재생 페이지를 로드
def videolist(request):
    videos=Video.objects 
    return render(request,'videolist.html',{'videos':videos})

# 지연 : 비디오 한개 보여주는 페이지 로드
def vdetail(request,video_id):
    videos=Video.objects 
    video_detail=get_object_or_404(Video,pk=video_id)
    return render(request,'vdetail.html',{'video':video_detail})