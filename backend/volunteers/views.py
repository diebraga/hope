from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Volunteer
from .serializers import VolunteerSerializer


class VolunteerListView(ListAPIView):
    """View for list all volunteers"""
    permission_classes = (permissions.AllowAny, )
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    pagination_class = None

class VolunteerView(RetrieveAPIView):
    """View for list volunteers by pk auth"""
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

class VerifiedVolunteerView(ListAPIView):
    """View for list veried volunteers"""
    permission_classes = (permissions.AllowAny, )
    queryset = Volunteer.objects.filter(verified=True)
    serializer_class = VolunteerSerializer
    pagination_class = None
