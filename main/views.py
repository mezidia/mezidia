from django.shortcuts import render
import requests


def get_org_repos(org_name: str) -> list:
    """
    Get data about repositories in organization

    :param org_name: str
    :return: data: list
    """
    data = []
    url = f'https://api.github.com/orgs/{org_name}/repos'
    repos = requests.get(url)
    for repo in repos.json():
        data.append({
            'name': repo['name'],
            'url': repo['html_url'],
            'desc': repo['description'],
            'time': repo['created_at'],
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


def index(request):
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
    projects = get_org_repos('mezidia')
    members = get_org_members('mezidia')

    context = {
        'nav_data': nav_data,
        'skills': skills,
        'projects': projects,
        'members': members,
    }
    return render(request, 'main/index.html', context)
