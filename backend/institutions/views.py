from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Institution
from .serializers import InstitutionSerializer, InstitutionDetailSerializer
from datetime import datetime, timezone, timedelta

class InstitutionsView(ListAPIView):
    queryset = Institution.objects.order_by('-list_date').filter(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = InstitutionSerializer
    lookup_field = 'slug'

class InstitutionView(RetrieveAPIView):
    queryset = Institution.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = InstitutionDetailSerializer
    lookup_field = 'slug'

class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = InstitutionSerializer

    def post(self, request, format=None):
        queryset = Institution.objects.order_by('-list_date').filter(is_published=True)
        data = self.request.data

        institution_type = data['institution_type']
        queryset = queryset.filter(Institution_type__iexact=institution_type)
        
        has_photos = data['has_photos']
        if has_photos == '1+':
            has_photos = 1
        elif has_photos == '3+':
            has_photos = 3
        elif has_photos == '5+':
            has_photos = 5
        elif has_photos == '10+':
            has_photos = 10
        elif has_photos == '15+':
            has_photos = 15
        
        for query in queryset:
            count = 0
            if query.photo_1:
                count += 1
            if query.photo_2:
                count += 1
            if query.photo_3:
                count += 1
            if query.photo_4:
                count += 1
            if query.photo_5:
                count += 1
            if query.photo_6:
                count += 1
            if query.photo_7:
                count += 1
            if query.photo_8:
                count += 1
            if query.photo_9:
                count += 1
            if query.photo_10:
                count += 1
            if query.photo_11:
                count += 1
            if query.photo_12:
                count += 1
            if query.photo_13:
                count += 1
            if query.photo_14:
                count += 1
            if query.photo_15:
                count += 1
            if query.photo_16:
                count += 1
            if query.photo_17:
                count += 1
            if query.photo_18:
                count += 1
            if query.photo_19:
                count += 1
            if query.photo_20:
                count += 1
            
            if count < has_photos:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact=slug)
        
        keywords = data['keywords']
        queryset = queryset.filter(description__icontains=keywords)

        serializer = InstituteSerializer(queryset, many=True)

        return Response(serializer.data)