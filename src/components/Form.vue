<template>
  <section class="resume-section" id="newMembers">
    <div class="resume-section-content">
      <h2 class="mb-5">New members</h2>
      <p>If you want to be the <strong>new member of this organization</strong>, submit the form below. If you
        have additional questions, ask @mezgoodle in Telegram or write an email which is in <i>About</i>
        section.</p>
      <p class="mb-0">We have no requirements, only <i>desire is important</i>.</p>
      <form class="pt-3">
        <label>Your email</label>
        <input class="form-control" required type="email" placeholder="name@example.com" v-model="email">
        <label>Your name</label>
        <input class="form-control" required type="text" maxlength="25" placeholder="Enter name" v-model="name">
        <label>Your comments</label>
        <textarea class="form-control" type="text" placeholder="Your comments" rows="3" v-model="comments"></textarea>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      name: '',
      comments: ''
    }
  }
}
</script>
