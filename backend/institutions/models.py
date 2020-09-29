from django.db import models
from django.utils.timezone import now
from volunteers.models import Volunteer


class Institution(models.Model):
    """Model for institution creation"""
    class InstitutionType(models.TextChoices):
        """Class to create choices"""
        ENVIRONMENT = 'Environment'
        HUMANITARIAN = 'Humanitarian'
    
    volunteer = models.ForeignKey(Volunteer, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    institution_name = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, blank=True)
    zipcode = models.CharField(max_length=15)
    institution_type = models.CharField(max_length=50, choices=InstitutionType.choices, default=InstitutionType.HUMANITARIAN)
    description = models.TextField(blank=True)
    # verified are volunteers registred and trusted by the admin "manual setup"
    verified = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='photos/%d/%m/%y/')
    photo_1 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_7 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_8 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_9 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_10 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_11 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_12 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_13 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_14 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_15 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_16 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_17 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_18 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_19 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    photo_20 = models.ImageField(upload_to='photos/%d/%m/%y/', blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.institution_name
