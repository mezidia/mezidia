<template>
  <li><a v-bind:href=project.link target="_blank">{{project.name}}</a></li>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
