from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.
def upload_to(instance,filename):
    return 'posts/{filename}'.format(filename=filename)
class Plataformas(models.Model):
    nombre=models.CharField(max_length=100)
    def __str__(self):
        return self.nombre
class Genero(models.Model):
    nombre=models.CharField(max_length=100)
    def __str__(self):
        return self.nombre
class Desarrollador(models.Model):
    nombre=models.CharField(max_length=100)
    def __str__(self):
        return self.nombre
class Idiomas(models.Model):
    nombre=models.CharField(max_length=100)
    def __str__(self):
        return self.nombre
class Juegos(models.Model):
    url_portada=models.ImageField(null=True ,upload_to='media/')
    nombre=models.CharField(max_length=500)
    descripcion=models.TextField()
    desarrollador=models.ManyToManyField(Desarrollador)
    plataformas=models.ManyToManyField(Plataformas)
    genero=models.ManyToManyField(Genero)
    idiomas=models.ManyToManyField(Idiomas)
    publicacion=models.DateField(verbose_name="Fecha lanzamiento")
    num_llaves=models.IntegerField()
    publicado=models.DateField(null=True ,verbose_name="Publicacion de la venta")
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    def __str__(self):
        return self.nombre
class Prueba(models.Model):
    imagen=models.ImageField(_("Image"),upload_to=upload_to,default='posts/default.png')
    def __str__(self):
        return self.nombre