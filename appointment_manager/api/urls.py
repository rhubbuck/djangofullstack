# from django.urls import path
# from .views import AppointmentView

# urlpatterns = [
#     path('home', AppointmentView.as_view())
# ]
from rest_framework import routers
from .api import AppointmentViewSet
from .api import FeedViewSet

router = routers.DefaultRouter()
router.register('api/appointments', AppointmentViewSet, 'appointments')
router.register('api/feed', FeedViewSet, 'appointments')

urlpatterns = router.urls
