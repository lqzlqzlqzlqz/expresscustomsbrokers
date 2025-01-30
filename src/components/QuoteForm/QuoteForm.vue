<template>
  <transition name="fade">
    <div v-if="modelValue" class="modal-overlay" @click.self="close">
      <transition name="slide-fade">
        <div class="modal-content">
          <button class="close-button" @click="close">×</button>
          <h2>Request a Quote</h2>
          <p>Please take a moment to fill out the form.</p>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" v-model="firstName" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" v-model="lastName" />
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input type="email" v-model="email" required />
            </div>
            <div class="form-group">
              <label>Subject *</label>
              <input type="text" v-model="subject" required />
            </div>
            <div class="form-group">
              <label>Leave us a message...</label>
              <textarea v-model="message"></textarea>
            </div>
            <div class="button-group">
              <button type="submit" class="submit-button">Submit</button>
              <button type="button" class="reset-button" @click="resetForm">
                Reset
              </button>
              <button type="button" class="cancel-button" @click="close">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </transition>
</template>
  
  <script>
  import emailjs from 'emailjs-com';
  import { ElMessage } from 'element-plus'
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    toEmail: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
      this.resetForm(); 
    },
    submitForm() {
      // Handle form submission
      this.sendEmail();
      this.close();
    },
    async sendEmail() {
      const templateParams = {
        from_name: `${this.firstName} ${this.lastName}`,
        from_email: this.email,
        message: `Name: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nSubject: ${this.subject}\nMessage:\n${this.message}`,
        ...(this.toEmail && { to_email: this.toEmail }),
      };
      let templateId = 'template_28n482m';
      if (this.toEmail === 'imports@expresscustomsbrokers.co.nz') {
        templateId = 'template_1c2r7jb';
      } else {
        templateId = 'template_28n482m';
      }
      emailjs.send('service_e5lmpmb', templateId, templateParams, 'waprEV-QT2UuSJdkU')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          ElMessage.success('Email sent successfully!');
        }, (error) => {
          console.error('FAILED...', error);
          ElMessage.error('Failed to send email.');
        });
    },
    resetForm() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    },
  },
};
  </script>
  
  <style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 450px;
  max-width: 90%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

h2 {
  margin-bottom: 10px;
  color: #333;
  font-family: "Roboto", sans-serif;
}

p {
  margin-bottom: 20px;
  color: #666;
  font-family: "Open Sans", sans-serif;
}

.form-group {
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-family: "Open Sans", sans-serif;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #a64ca6;
  box-shadow: 0 0 5px rgba(166, 76, 166, 0.5);
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.submit-button,
.reset-button,
.cancel-button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.submit-button {
  background: #a64ca6;
  color: white;
}

.submit-button:hover {
  background: #8a3b8a;
}

.reset-button {
  background: #f1c50e;
  color: white;
}

.reset-button:hover {
  background: #d1a40e;
}

.cancel-button {
  background: #ccc;
  color: white;
}

.cancel-button:hover {
  background: #999;
}
</style>