<template>
  <div>
    <Navbar
      v-bind:items="navbaritems"
    />
    <div class="container-fluid p-0">
      <About
        v-bind:icons="aboutIcons"
      />
      <hr class="m-0" />
      <Loader
        v-if="loading"
      />
      <Projects
        v-else-if="projects.length"
        v-bind:projects="projects"
      />
      <p v-else>No projects</p>
      <hr class="m-0" />
      <Loader
        v-if="loading"
      />
      <Members
        v-else-if="members.length"
        v-bind:members="members"
      />
      <p v-else>No members</p>
      <hr class="m-0" />
      <Skills
        v-bind:skills="skills"
      />
      <hr class="m-0" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Members from '@/components/Members.vue'
import Skills from '@/components/Skills.vue'
import Loader from '@/components/Loader.vue'
export default {
  name: 'App',
  mounted () {
    fetch('https://api.github.com/orgs/mezidia/repos')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.projects = json
        }, 1000)
      })
    fetch('https://api.github.com/orgs/mezidia/members')
      .then(response => response.json())
      .then(json => {
        for (const member of json) {
          fetch(member.url)
            .then(response => response.json())
            .then(json => {
              setTimeout(() => {
                this.members.push({
                  login: json.login,
                  name: json.name,
                  avatar_url: json.avatar_url,
                  html_url: json.html_url,
                  bio: json.bio
                })
                this.loading = false
              }, 1000)
            })
        }
      })
  },
  data () {
    return {
      navbaritems: [
        { link: '#about', name: 'About' },
        { link: '#projects', name: 'Projects' },
        { link: '#members', name: 'Members' },
        { link: '#skills', name: 'Skills' },
        { link: '#interests', name: 'Interests' },
        { link: '#awards', name: 'Awards' },
        { link: '#newMembers', name: 'New members' }
      ],
      aboutIcons: [
        { link: 'https://github.com/mezidia', title: 'About', icon_class: 'fab fa-github' },
        { link: 'https://t.me/sylvenis', title: 'Maxim Telegram profile', icon_class: 'fab fa-telegram' },
        { link: 'https://www.facebook.com/profile.php?id=100005721694357', title: 'Maxim Facebook profile', icon_class: 'fab fa-facebook-f' }
      ],
      skills: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fab fa-react', 'fab fa-node-js', 'fab fa-npm',
        'fab fa-python', 'fab fa-unity', 'fab fa-android', 'fab fa-docker', 'fab fa-php'],
      projects: [],
      members: [],
      loading: true
    }
  },
  components: {
    Navbar, About, Projects, Members, Skills, Loader
  }
}
</script>
