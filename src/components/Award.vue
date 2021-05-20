<template>
  <li>
    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
    {{award}}
  </li>
</template>

<script>
export default {
  props: {
    award: {
      type: String,
      required: true
    }
  }
}
</script>
