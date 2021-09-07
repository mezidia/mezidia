<template>
  <section class="resume-section" id="about">
    <div class="resume-section-content">
      <h1 class="mb-0">
        <span class="text-primary">ME</span>
        <span class="head-animation">ZIDIA</span>
      </h1>
      <div class="subheading mb-5">
        03056 Politekhnichna Street · Kyiv ·
        <a href="mailto:mezidiaofficial@gmail.com">mezidiaofficial@gmail.com</a>
      </div>
      <p class="lead mb-5">We are the young organization of smart, creative and interesting people. Every day we learn something new, create and improve ourselves. We also like to have fun together and play. And We make applications for people. If you are new here and want to join our team, first fill out the <a href="#newMembers">form</a> and view our working projects:
        <ul>
          <AboutProject
            v-for="project of projects" :key="project"
            v-bind:project="project"
          />
        </ul>
      </p>
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
import AboutProject from '@/components/AboutProject'
export default {
  props: ['icons', 'projects'],
  components: {
    AboutIcon,
    AboutProject
  }
}
</script>
