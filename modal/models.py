from django.db import models

class Edge(models.Model):
    node_id = models.CharField(primary_key=True, max_length=10)
    name = models.CharField(max_length=100)
    in_channel = models.CharField(max_length=100)
    out_channel = models.CharField(max_length=100)
    kernel_size = models.IntegerField()
    stride = models.IntegerField()
    padding = models.IntegerField()