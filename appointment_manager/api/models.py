from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Appointment(models.Model):
    event = models.CharField(max_length=100, default="")
    location = models.CharField(max_length=100, default="")
    year = models.CharField(max_length=4, default="")
    miles = models.CharField(max_length=20, default="")
    price = models.CharField(max_length=20, default="")
    # likes = models.ManyToManyField(User, related_name="posts")
    owner = models.ForeignKey(
        User, related_name="appointments", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


# class LikePost(models.Model):
#     post_id = models.CharField(max_length=100)
#     username = models.CharField(max_length=100)

#     def __str__(self):
#         return self.username
