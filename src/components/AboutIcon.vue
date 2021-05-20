<template>
  <a class="social-icon" v-bind:href=icon.link v-bind:title=icon.title target="blank"><i v-bind:class=icon.icon_class></i></a>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
}
</script>
