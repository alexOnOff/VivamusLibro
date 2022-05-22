from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.fields import GenericRelation
from django.db.models import Sum


class User(models.Model):
    login = models.CharField(max_length=30)
    email = models.EmailField()
    birthday = models.DateField()


class Story(models.Model):
    author = models.CharField('Автора', max_length = 30)
    name = models.CharField('Название',max_length = 30)
    description = models.TextField('Описание')
    content = models.TextField('Содержание')
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Story'
        verbose_name_plural = 'Stories'