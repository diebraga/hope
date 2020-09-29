from django.contrib import admin
from .models import Volunteer

class VolunteerAdmin(admin.ModelAdmin):
    """Class to be viewed in the admin panel"""
    list_display = ('id', 'name', 'email', 'date_register')
    list_display_links = ('id', 'name')
    search_fields = ('name', )
    list_per_page = 25

admin.site.register(Volunteer, VolunteerAdmin)