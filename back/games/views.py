from django.shortcuts import render
from django.http import JsonResponse
from PIL import Image
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status ,viewsets,filters,generics,permissions
from rest_framework.parsers import MultiPartParser,FormParser
from games.serializers import *
from games.models import *
# Create your views here.

# class GamesPost(APIView):
#     def post(self,request):
#         serializer=GamesSerializer(data=request.data)
#         if(serializer.is_valid()):
#             serializer.save(url_portada=request.data['url_portada'])
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class TestUploadImage(APIView):
    # permission_classes=[permissions.AllowAny]
    parser_classes=[MultiPartParser,FormParser]
    def post(self,request,format=None):
        print(request.data)
        serializer=PruebaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)


# Sirve para ver elementos individuales o apis enteras

class Gameslist(generics.ListCreateAPIView):
    # //SI hay problema mirar video 1
    queryset=Juegos.objects.all()
    serializer_class=GamesSerializer
   


class GamesDetail(generics.RetrieveDestroyAPIView):
    # //SI hay problema mirar video 1
    queryset=Juegos.objects.all()
    serializer_class=GamesSerializer
