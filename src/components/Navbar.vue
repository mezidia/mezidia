<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="https://github.com/mezidia" target="blank">
      <span class="d-block d-lg-none">Mezidia</span>
      <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/MezidiaLogoTransparent.png" alt="Profile image" /></span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
        class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <NavbarItem
          v-for="item of items" :key="item"
          v-bind:item="item"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import NavbarItem from '@/components/NavbarItem'
export default {
  props: ['items'],
  components: {
    NavbarItem
  }
}
</script>
