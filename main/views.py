from django.shortcuts import render


def index(request):
    nav_data = [
        {
            'id': '#about',
            'text': 'About',
        },
        {
            'id': '#projects',
            'text': 'Projects',
        },
        {
            'id': '#members',
            'text': 'Members',
        },
        {
            'id': '#skills',
            'text': 'Skills',
        },
        {
            'id': '#interests',
            'text': 'Interests',
        },
        {
            'id': '#awards',
            'text': 'Awards',
        },
        {
            'id': '#newMembers',
            'text': 'New members',
        },

    ]
    skills = ['html5', 'css3-alt', 'js-square', 'react', 'node-js', 'npm',
              'python', 'unity', 'android', 'docker', 'php']

    context = {
        'nav_data': nav_data,
        'skills': skills
    }
    return render(request, 'main/index.html', context)
