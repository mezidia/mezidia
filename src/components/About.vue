<template>
  <section class="resume-section" id="about">
    <div class="resume-section-content">
      <h1 class="mb-0">
        <span class="text-primary">ME</span>
        <span class="head-animation">ZIDIA</span>
      </h1>
      <div class="subheading mb-5">
        03056 Politekhnichna Street · Kyiv ·
        <a href="mailto:mezgoodle@gmail.com">mezgoodle@gmail.com</a>
      </div>
      <p class="lead mb-5">We are the young organization of smart, creative and interesting people. Every day we learn something new, create and improve ourselves. We also like to have fun together and play. And We make applications for people.</p>
      <div class="social-icons">
        <AboutIcon
          v-for="icon of icons" :key="icon"
          v-bind:icon="icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AboutIcon from '@/components/AboutIcon'
export default {
  props: ['icons'],
  components: {
    AboutIcon
  }
}
</script>
