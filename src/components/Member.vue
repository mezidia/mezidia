<template>
    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="flex-grow-1">
        <h3 class="mb-0">{{member.name}}</h3>
        <div class="subheading mb-3"><a v-bind:href=member.html_url target="blank">@{{member.login}}</a></div>
        <div>{{member.bio}}</div>
    </div>
    <img v-bind:src=member.avatar_url width="50" height="50" alt="User photo">
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>
