from django.shortcuts import render
from rest_framework import generics
from .serializers import AppointmentSerializer
from .models import Appointment

# Create your views here.


class AppointmentView(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
