from django.shortcuts import render

# Create your views here.
def videolist(request):
    return render(request,'videolist.html')