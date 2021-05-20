<template>
  <li class="nav-item"><a class="nav-link js-scroll-trigger" v-bind:href=item.link>{{item.name}}</a></li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
