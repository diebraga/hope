from django.contrib import admin
from .models import Institution

class InstitutionAdmin(admin.ModelAdmin):
    """Fields showed in the panel"""
    list_display = ('id', 'institution_name', 'is_published', 'verified', 'list_date', 'volunteer')
    list_display_links = ('id', 'institution_name')
    list_filter = ('volunteer', )
    list_editable = ('is_published', )
    search_fields = ('institution_name', 'description', 'country', 'city', 'state', 'zipcode', 'verified')
    list_per_page = 25

admin.site.register(Institution, InstitutionAdmin)
