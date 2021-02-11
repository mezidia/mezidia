from django.forms import Form, EmailInput, EmailField, Textarea, CharField, TextInput


class EmailForm(Form):
    name = CharField(label='Your name',
                     max_length=25,
                     widget=TextInput(attrs={
                         'class': 'form-control',
                         'placeholder': 'Enter name',
                     }))
    email = EmailField(label='Your email',
                       widget=EmailInput(attrs={
                           'class': 'form-control',
                           'placeholder': 'name@example.com',
                       }))
    comments = CharField(label='Your comments',
                         required=False,
                         widget=Textarea(attrs={
                             'class': 'form-control',
                             'placeholder': 'Your comments',
                             'rows': 3,
                         }))
