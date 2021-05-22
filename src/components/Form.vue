<template>
  <section class="resume-section" id="newMembers">
    <div class="resume-section-content">
      <h2 class="mb-5">New members</h2>
      <p>If you want to be the <strong>new member of this organization</strong>, submit the form below. If you
        have additional questions, ask @mezgoodle in Telegram or write an email which is in <i>About</i>
        section.</p>
      <p class="mb-0">We have no requirements, only <i>desire is important</i>.</p>
      <div class="alert alert-danger d-flex align-items-center mt-3" role="alert" v-if="error">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg mr-2" viewBox="0 0 16 16">
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
        </svg>
        <div>
          Error while sending email
        </div>
      </div>
      <div class="alert alert-success d-flex align-items-center mt-3" role="alert" v-else-if="sended">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle mr-2" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
        <div>
          Email was successfully sended
        </div>
      </div>
      <form class="pt-3" @submit.prevent="sendEmail" v-else>
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
      message: '',
      sended: false,
      error: false
    }
  },
  methods: {
    sendEmail (e) {
      try {
        emailjs.sendForm('service_sp6z45v', 'template_d5pneq8', e.target,
          'user_TZrOrBt41LsvPCLcZaWB7', {
            name: this.name,
            email: this.email,
            message: this.message
          })
      } catch (error) {
        this.error = true
        console.log({ error })
      }
      // Reset form field
      this.sended = true
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
