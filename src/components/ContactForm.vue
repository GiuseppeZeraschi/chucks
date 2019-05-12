<template>
  <form
    @submit.prevent="handleSubmit"
    class="v-contact-form"
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <div class="v-contact-form__honey-pot">
      <label>
        Don’t fill this out if you're human:
        <input name="bot-field">
      </label>
    </div>
    <div class="v-contact-form__input-group">
      <div class="v-contact-form__input-wrapper">
        <label
          :class="firstNameLabelClasses"
          class="v-contact-form__label u-text-mars-title-alt"
          for="firstName"
        >
          First Name
          <input
            @click="firstNameInputActive = true"
            @blur="firstNameInputActive = false"
            v-model="form.firstName"
            :class="firstNameInputClasses"
            class="v-contact-form__input v-contact-form__input--text"
            type="text"
            name="firstName"
            id="firstName"
            required
          >
        </label>
      </div>
      <div class="v-contact-form__input-wrapper">
        <label
          :class="lastNameLabelClasses"
          class="v-contact-form__label u-text-mars-title-alt"
          for="lastName"
        >
          Last Name
          <input
            @click="lastNameInputActive = true"
            @blur="lastNameInputActive = false"
            v-model="form.lastName"
            :class="lastNameInputClasses"
            class="v-contact-form__input v-contact-form__input--text"
            type="text"
            name="lastName"
            id="lastName"
            required
          >
        </label>
      </div>
    </div>
    <div class="v-contact-form__input-group">
      <div class="v-contact-form__input-wrapper">
        <label
          :class="phoneLabelClasses"
          class="v-contact-form__label u-text-mars-title-alt"
          for="phone"
        >
          Phone
          <input
            @click="phoneInputActive = true"
            @blur="phoneInputActive = false"
            v-model="form.phone"
            :class="phoneInputClasses"
            class="v-contact-form__input v-contact-form__input--text"
            type="tel"
            name="phone"
            id="phone"
            required
          >
        </label>
      </div>
      <div class="v-contact-form__input-wrapper">
        <label
          :class="emailLabelClasses"
          class="v-contact-form__label u-text-mars-title-alt"
          for="email"
        >
          Email
          <input
            @click="emailInputActive = true"
            @blur="emailInputActive = false"
            v-model="form.email"
            :class="emailInputClasses"
            class="v-contact-form__input v-contact-form__input--text"
            type="email"
            name="email"
            id="email"
            required
          >
        </label>
      </div>
    </div>
    <div class="v-contact-form__input-wrapper">
      <label
        :class="messageLabelClasses"
        class="v-contact-form__label u-text-mars-title-alt"
        for="message"
      >
        Message
        <textarea
          @click="messageInputActive = true"
          @blur="messageInputActive = false"
          v-model="form.message"
          :class="messageInputClasses"
          class="v-contact-form__input v-contact-form__input--textarea"
          style="resize: none;"
          name="message"
          id="message"
          required
        ></textarea>
      </label>
    </div>
    <input
      type="submit"
      value="Send"
      class="v-contact-form__submit u-button u-button-primary u-text-venus-title"
    >
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      formSuccess: null,
      firstNameInputActive: false,
      lastNameInputActive: false,
      phoneInputActive: false,
      emailInputActive: false,
      messageInputActive: false,
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form
        })
      })
        .then(() => this.$router.push("thanks"))
        .catch(() => this.$router.push("404"));
    }
  },
  computed: {
    firstNameInputClasses() {
      return {
        "v-contact-form__input--active": this.firstNameInputActive
      };
    },
    firstNameLabelClasses() {
      return {
        "v-contact-form__label--active":
          this.firstNameInputActive || this.form.firstName
      };
    },
    lastNameInputClasses() {
      return {
        "v-contact-form__input--active": this.lastNameInputActive
      };
    },
    lastNameLabelClasses() {
      return {
        "v-contact-form__label--active":
          this.lastNameInputActive || this.form.lastName
      };
    },
    phoneInputClasses() {
      return {
        "v-contact-form__input--active": this.phoneInputActive
      };
    },
    phoneLabelClasses() {
      return {
        "v-contact-form__label--active":
          this.phoneInputActive || this.form.phone
      };
    },
    emailInputClasses() {
      return {
        "v-contact-form__input--active": this.emailInputActive
      };
    },
    emailLabelClasses() {
      return {
        "v-contact-form__label--active":
          this.emailInputActive || this.form.email
      };
    },
    messageInputClasses() {
      return {
        "v-contact-form__input--active": this.messageInputActive
      };
    },
    messageLabelClasses() {
      return {
        "v-contact-form__label--active":
          this.messageInputActive || this.form.message
      };
    }
  }
};
</script>

<style lang="scss">
.v-contact-form {
  display: flex;
  flex-direction: column;

  &__honey-pot {
    display: none;
  }

  &__input-group {
    display: flex;
    flex-direction: row;
  }

  &__input-wrapper {
    padding: $mercury;
    width: 100%;
  }

  &__label {
    margin-left: $mercury;
    transition: color 0.1s ease-in;

    &--active {
      color: $gold;
    }
  }

  &__input {
    border: solid inset 0.5px $black;
    font-family: "Heebo", sans-serif;
    transition: border 0.1s ease-in;
    width: 100%;

    &--active {
      background-color: $grey;
    }

    &--text {
      padding-top: $pluto;
    }

    &--textarea {
      height: 95px;
    }
  }

  &__submit {
    align-self: center;
    margin-top: $earth;

    @include lg {
      align-self: flex-start;
      margin-left: $mercury;
      margin-top: $mercury;
    }
  }
}
</style>
