from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import EdgeCreateApiSerializer, EdgeApiSerializer, EdgeApiUpdateSerializer
from .models import Edge

# Create your views here.
class EdgeCreateAPIView(APIView):
    def post(self, request):
        serializer = EdgeCreateApiSerializer(data=request.data)
        if serializer.is_valid():
            if serializer.validated_data['name'] == 'Conv1D':
                tmp_id = serializer.validated_data['node_id']
                tmp_name = serializer.validated_data['name']
                serializer.save(node_id=tmp_id, name=tmp_name, in_channel='3', out_channel='64', kernel_size=3, stride=1, padding=0)
            if serializer.validated_data['name'] == 'Conv2D':
                tmp_id = serializer.validated_data['node_id']
                tmp_name = serializer.validated_data['name']
                serializer.save(node_id=tmp_id, name=tmp_name, in_channel='3', out_channel='64', kernel_size=3, stride=1, padding=0)
            if serializer.validated_data['name'] == 'MaxPooling':
                tmp_id = serializer.validated_data['node_id']
                tmp_name = serializer.validated_data['name']
                serializer.save(node_id=tmp_id, name=tmp_name, in_channel='None', out_channel='None', kernel_size=3, stride=1, padding=0)
            if serializer.validated_data['name'] == 'AVGPooling':
                tmp_id = serializer.validated_data['node_id']
                tmp_name = serializer.validated_data['name']
                serializer.save(node_id=tmp_id, name=tmp_name, in_channel='None', out_channel='None', kernel_size=3, stride=1, padding=0)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EdgeAPIView(APIView):
    def get(self, request, node_id):
        edge = get_object_or_404(Edge, node_id=node_id)
        serializer = EdgeApiSerializer(edge, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def post(self, request, node_id):
        edge = get_object_or_404(Edge, node_id=node_id)
        serializer = EdgeApiUpdateSerializer(data=request.data)
        if serializer.is_valid():
            edge.name = serializer.data['name']
            edge.in_channel = serializer.data['in_channel']
            edge.out_channel = serializer.data['out_channel']
            edge.kernel_size = serializer.data['kernel_size']
            edge.stride = serializer.data['stride']
            edge.padding = serializer.data['padding']
            edge.save()
            serializer = EdgeApiUpdateSerializer(edge, many=False)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)