from .views import UserView
from django.urls import path,include

urlpatterns = [
    path('api/v.1/createuser', UserView.as_view(), name ='create_user'),
]
