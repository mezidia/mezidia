<template>
  <li class="list-inline-item"><i v-bind:class=skill></i></li>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
      required: true
    }
  }
}
</script>
