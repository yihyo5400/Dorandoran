from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile

def logout(request):
    auth.logout(request)
    return redirect('test')

def signup(request):
    if request.method=="POST":
        if request.POST["password1"]==request.POST["password2"]:
            user = User.objects.create_user(
                # user model fields
                username=request.POST["username"],
                email=request.POST["email"],
                password=request.POST["password1"],
            )
            # one to one
            nickname = request.POST["nickname"]
            profile = Profile(user=user, nickname=nickname)
            profile.save()
            auth.login(request,user)
            return redirect('test')
        return render(request, 'signup.html')
    return render(request, 'signup.html')

def login(request):
    if request.method=="POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        
        if user is not None:
            auth.login(request, user)
            return redirect('test')
        else:
            return render(request, 'login.html', {'error':'username or password is incorret'})
    else:
        return render(request, 'login.html')



def test(request):
    return render(request, 'test.html')
