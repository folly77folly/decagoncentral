from django.shortcuts import render
from rest_framework.views import APIView
from .serializer import UserSerializer
from rest_framework import status
from rest_framework.response import Response
from.models import User

# Create your views here.
class UserView(APIView):
    """
    View to list all buckets in the system.
    """

    def get(self, request, format='json'):
        """
        Return a list of all buckets.
        """
        #query for all objects of Bucket
        all_users = User.objects.all()

        #using serilizers to change Bucket model to json
        serializer = UserSerializer(all_users, many = True)

        return Response(serializer.data, status = status.HTTP_200_OK)
    


    def post(self, request, format='json'):
        #collecting data from request
        data = request.data

        #using serializer on the Bucket model
        serializer = UserSerializer(data = data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
