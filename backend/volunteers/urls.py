from django.urls import path
from .views import VolunteerListView, VolunteerView, VerifiedVolunteerView

urlpatterns = [
    path('', VolunteerListView.as_view()),
    path('verified', VerifiedVolunteerView.as_view()),
    path('<pk>', VolunteerView.as_view()),
]