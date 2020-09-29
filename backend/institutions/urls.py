from django.urls import path
from .views import InstitutionsView, InstitutionView, SearchView

urlpatterns = [
    path('', InstitutionsView.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', InstitutionView.as_view()),
]
