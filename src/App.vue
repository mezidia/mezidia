<template>
  <div>
    <h1>Hello</h1>
    <Navbar
      v-bind:items="navbaritems"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
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
      ]
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
