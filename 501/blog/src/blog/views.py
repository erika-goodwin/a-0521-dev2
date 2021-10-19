from django.shortcuts import render

# Create your views here.

def home(request):

    all_posts = Post.object.all()
    return render(request, 'index.html', {'post': all_posts})