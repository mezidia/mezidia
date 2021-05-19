<template>
  <section class="resume-section" id="awards">
    <div class="resume-section-content">
      <h2 class="mb-5">Awards & Certifications</h2>
      <ul class="fa-ul mb-0">
        <Award
          v-for="award of awards" :key="award"
          v-bind:award="award"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import Award from '@/components/Award'
export default {
  props: ['awards'],
  components: {
    Award
  }
}
</script>
