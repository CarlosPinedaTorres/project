# from rest_framework import routers
from .api import *
from django.urls import path ,re_path
from games.views import *
# router=routers.DefaultRouter()
# router.register('api/games',GamesViewSet,'games')
# router.register('api/plataformas',PlataformasViewSet,'plataformas')
urlpatterns=[
    path('<int:pk>/',GamesDetail.as_view(),name='detailcreate'),
    path('',Gameslist.as_view(),name='listcreate'),
    path("api/upload/",TestUploadImage.as_view(),name='Subir'),
]
# urlpatterns+=router.urls

