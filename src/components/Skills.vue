<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">Our Skills</h2>
      <div class="subheading mb-3">Programming Languages & Tools</div>
      <ul class="list-inline dev-icons">
        <Skill
          v-for="skill of skills" :key="skill"
          v-bind:skill="skill"
        />
      </ul>
      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Responsive Design
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Cross Platfrom useful applications
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Modern technoligies
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Good feedback
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Skill from '@/components/Skill'
export default {
  props: ['skills'],
  components: {
    Skill
  }
}
</script>
