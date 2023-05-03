from rest_framework import viewsets, permissions
from .serializers import AppointmentSerializer
from .models import Appointment

# Appointment Viewset


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return self.request.user.appointments.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Feed Viewset

class FeedViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return Appointment.objects.all()
