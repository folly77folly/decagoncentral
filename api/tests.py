from django.test import TestCase
from .models import User

# Create your tests here.
class TestUser(TestCase):
    def setUp(self):
        self.firstname = 'Ade'
        self.surname ='sola'
        self.email = 'adesola@gmail.com'
        self.password ='pass'
        self.position ='CTO'
        self.user = User(
            firstname = self.firstname ,
            surname = self.surname ,
            email = self.email ,
            password = self.password ,
            position = self.position ,
            )

    def test_create_user(self):
        self.user.save()
        name = self.user.firstname
        self.assertEqual(name, 'Ade')