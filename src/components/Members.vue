<template>
  <section class="resume-section" id="members">
    <div class="resume-section-content">
      <h2 class="mb-5">Members</h2>
      <Member
        v-for="member of members" :key="member"
        v-bind:member="member"
      />
    </div>
  </section>
</template>

<script>
import Member from '@/components/Member'
export default {
  props: ['members'],
  components: {
    Member
  }
}
</script>
