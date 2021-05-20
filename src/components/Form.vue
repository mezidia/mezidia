<template>
  <section class="resume-section" id="newMembers">
    <div class="resume-section-content">
      <h2 class="mb-5">New members</h2>
      <p>If you want to be the <strong>new member of this organization</strong>, submit the form below. If you
        have additional questions, ask @mezgoodle in Telegram or write an email which is in <i>About</i>
        section.</p>
      <p class="mb-0">We have no requirements, only <i>desire is important</i>.</p>
      <form class="pt-3" @submit.prevent="sendEmail">
        <label>Your email</label>
        <input
          class="form-control"
          required
          type="email"
          placeholder="name@example.com"
          v-model="email"
          name="email"
          >
        <label>Your name</label>
        <input
          class="form-control"
          required
          type="text"
          maxlength="25"
          placeholder="Enter name"
          v-model="name"
          name="name"
          >
        <label>Your comments</label>
        <textarea
          class="form-control"
          type="text"
          placeholder="Your comments"
          rows="3"
          v-model="message"
          name="message">
        </textarea>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  data () {
    return {
      email: '',
      name: '',
      message: ''
    }
  },
  methods: {
    sendEmail (e) {
      try {
        emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, e.target,
          process.env.VUE_APP_USER_ID, {
            name: this.name,
            email: this.email,
            message: this.message
          })
      } catch (error) {
        console.log({ error })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
