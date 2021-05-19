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
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Loader from '@/components/Loader.vue'
export default {
  name: 'App',
  mounted () {
    fetch('https://api.github.com/orgs/mezidia/repos')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.projects = json
          this.loading = false
        }, 1000)
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
      projects: [],
      loading: true
    }
  },
  components: {
    Navbar,
    About,
    Projects,
    Loader
  }
}
</script>
