<template>
  <section class="resume-section" id="projects">
    <div class="resume-section-content">
      <h2 class="mb-5">Projects</h2>
      <Project
          v-for="project of projects" :key="project"
          v-bind:project="project"
      />
    </div>
  </section>
</template>

<script>
import Project from '@/components/Project'
export default {
  props: ['projects'],
  components: {
    Project
  }
}
</script>
