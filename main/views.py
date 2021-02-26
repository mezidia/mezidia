from django.shortcuts import render
from django.core.mail import send_mail
import requests

from .forms import EmailForm

nav_data = [
    {'id': '#about', 'text': 'About'},
    {'id': '#projects', 'text': 'Projects'},
    {'id': '#members', 'text': 'Members'},
    {'id': '#skills', 'text': 'Skills'},
    {'id': '#interests', 'text': 'Interests'},
    {'id': '#awards', 'text': 'Awards'},
    {'id': '#newMembers', 'text': 'New members'},
]
skills = ['html5', 'css3-alt', 'js-square', 'react', 'node-js', 'npm',
          'python', 'unity', 'android', 'docker', 'php']


def get_org_repos(org_name: str) -> list:
    """
    Get data about repositories in organization

    :param org_name: str
    :return: data: list
    """
    data = []
    time_format_length = 10
    url = f'https://api.github.com/orgs/{org_name}/repos'
    repos = requests.get(url)
    for repo in repos.json():
        data.append({
            'name': repo['name'],
            'url': repo['html_url'],
            'desc': repo['description'],
            'time': repo['created_at'][:time_format_length],
        })
    return data


def get_org_members(org_name: str) -> list:
    """
    Get data about members in organization

    :param org_name: str
    :return: data: list
    """
    data = []
    url = f'https://api.github.com/orgs/{org_name}/members'
    members = requests.get(url)
    for member in members.json():
        member_url = member['url']
        member_data = requests.get(member_url).json()
        data.append({
            'username': member_data['login'],
            'name': member_data['name'],
            'img_url': member_data['avatar_url'],
            'url': member_data['html_url'],
            'bio': member_data['bio'],
        })
    return data


def send_email(request):
    sent = False
    if request.method == 'POST':
        form = EmailForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            subject = f"{cd['name']} wants to join Mezidia"
            message = f"Email: {cd['email']}. \n\rComments: {cd['comments']}"
            send_mail(subject, message, cd['email'], ['mezidiaofficial@gmail.com'])
            sent = True
    else:
        form = EmailForm()

    projects = get_org_repos('mezidia')
    members = get_org_members('mezidia')

    context = {
        'form': form,
        'nav_data': nav_data,
        'skills': skills,
        'projects': projects,
        'members': members,
        'sent': sent,
    }
    return render(request, 'main/index.html', context)


def index(request):
    projects = get_org_repos('mezidia')
    members = get_org_members('mezidia')

    context = {
        'form': EmailForm(),
        'nav_data': nav_data,
        'skills': skills,
        'projects': projects,
        'members': members,
    }
    return render(request, 'main/index.html', context)
