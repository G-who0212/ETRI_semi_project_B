from django.urls import path
from .views import EdgeCreateAPIView, EdgeAPIView

urlpatterns = [
    path('modal/create', EdgeCreateAPIView.as_view()),
    path('modal/<str:node_id>', EdgeAPIView.as_view()),
]