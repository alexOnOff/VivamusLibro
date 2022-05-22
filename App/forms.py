from .models import Story
from django.forms import ModelForm, TextInput, Textarea

class StoriesForm(ModelForm):
    class Meta:
        model = Story
        fields = ['author','name','description','content']

    widgets = {
        "author": TextInput(attrs = {
            'placeholder': 'Автор'
        }),
        "name": TextInput(attrs = {
            'placeholder': 'Название'
        }),
        "description": TextInput(attrs = {
            'placeholder': 'Описание'
        }),
        "content": Textarea(attrs = {
            'placeholder': 'Содержание'
        })
    }