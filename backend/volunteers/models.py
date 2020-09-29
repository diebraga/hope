from django.db import models
from datetime import datetime


class Volunteer(models.Model):
    """Model for volunteer creation"""
    name = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='photos/%d/%m/%y/')
    age = models.IntegerField(max_length=3)
    degree = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    experience_volunteering = models.TextField(blank=True)
    # verified are volunteers registred and trusted by the admin "manual setup"
    verified = models.BooleanField(default=False)
    date_register = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name