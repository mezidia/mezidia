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
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
export default {
  name: 'App',
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
      ]
    }
  },
  components: {
    Navbar,
    About
  }
}
</script>
