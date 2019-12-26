from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet, ListViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('lists', ListViewSet)

urlpatterns = [
    path('', include(router.urls)),
]