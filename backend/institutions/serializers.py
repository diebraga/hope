from rest_framework import serializers
from .models import Institution


class InstitutionSerializer(serializers.ModelSerializer):
    """Serializer returns fields bellow"""
    class Meta:
        model = Institution
        fields = ('institution_name', 'country', 'city', 'state', 'institution_type', 'photo_main', 'slug')

class InstitutionDetailSerializer(serializers.ModelSerializer):
    """Serializer returns all fields"""
    class Meta:
        model = Institution
        fields = '__all__'
        lookup_field = 'slug'
