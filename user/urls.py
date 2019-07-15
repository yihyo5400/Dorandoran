from django.contrib import admin
from django.urls import path
from . import views

urlpatterns =[
    path('join/', views.join, name="join"), # 회원가입
    path('login/', views.login, name="login"), # 로그인
    #path('mypage/'), 마이페이지 회원 id 값으로..
]