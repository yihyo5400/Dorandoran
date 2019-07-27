from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth,messages
from .models import Profile
import json

def logout(request):
    auth.logout(request)
    return redirect('test')

def signup(request):
    if request.method=="POST":
        if request.POST["password1"]==request.POST["password2"]:
            if user_exist(request)==False:
                print("** function test (sign up) **")
                user = User.objects.create_user(
                    # user model fields
                    username=request.POST["username"],
                    email=request.POST["email"],
                    password=request.POST["password1"],
                )
                # one to one
                nickname = request.POST.get("nickname")
                print(type(nickname))
                profile = Profile(user=user, nickname=nickname)
                profile.save()
                auth.login(request,user)
                return redirect('test')
        return render(request, 'signup.html', {'error':'회원가입 실패 :: 중복된 아이디 혹은 닉네임'})
    return render(request, 'signup.html')

def user_exist(request):
    user = request.POST["username"]
    nickname = request.POST["nickname"]
    print("** function test (user_exist)**")
    if User.objects.filter(username=user).exists() or Profile.objects.filter(nickname=nickname):
        return True
    else:
        return False


def login(request):
    if request.method=="POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        
        if user is not None:
            auth.login(request, user)
            return redirect('test')
        else:
            return render(request, 'login.html', {'error':'username or password is incorrect'})
    else:
        return render(request, 'login.html')



def test(request):
    return render(request, 'test.html')

