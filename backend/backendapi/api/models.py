from django.db import models

# Create your models here.
class List(models.Model):
    name = models.CharField(max_length=15, blank=False, null=False)
    lastname = models.CharField(max_length=15, blank=False, null=False)
    birth_date = models.DateField()