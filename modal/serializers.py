from .models import Edge
from rest_framework import serializers

class EdgeCreateApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Edge
        fields = ['node_id', 'name']

class EdgeApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Edge
        fields = '__all__'

class EdgeApiUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Edge
        fields = ['name', 'in_channel', 'out_channel', 'kernel_size', 'stride', 'padding']