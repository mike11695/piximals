from django.shortcuts import render

# Create your views here.

#Index page of site
def index(request):
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html')
