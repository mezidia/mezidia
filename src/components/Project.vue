<template>
  <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="flex-grow-1">
        <a class="h3 mb-0" v-bind:href=project.html_url target="blank">{{project.name}}</a>
        <p>{{project.description}}</p>
      </div>
      <div class="flex-shrink-0"><span class="text-primary">{{fixTime}}</span></div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    fixTime () {
      return this.project.created_at.slice(0, -10)
    }
  }
}
</script>
