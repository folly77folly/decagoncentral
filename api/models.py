from django.db import models

# Create your models here.
class User(models.Model):
    firstname = models.CharField(max_length = 50)
    surname = models.CharField(max_length = 50)
    password = models.CharField(max_length = 50)
    email = models.EmailField(max_length = 50)
    position =models.CharField(max_length = 100)
    createdat = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.firstname