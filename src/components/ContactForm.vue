<template>
  <form class="v-contact-form" method="POST" data-netlify="true">
    <div class="v-contact-form__input-group">
      <div class="v-contact-form__input-wrapper">
        <input
          @click="firstNameInputActive = true"
          @blur="firstNameInputActive = false"
          v-model="firstName"
          :class="firstNameInputClasses"
          class="v-contact-form__input v-contact-form__input--text"
          type="text"
          name="firstName"
          id="firstName"
          required
        >
        <label
          :class="firstNameLabelClasses"
          class="v-contact-form__label u-text-mars-title"
          for="firstName"
        >First Name</label>
      </div>
      <div class="v-contact-form__input-wrapper">
        <input
          @click="lastNameInputActive = true"
          @blur="lastNameInputActive = false"
          v-model="lastName"
          :class="lastNameInputClasses"
          class="v-contact-form__input v-contact-form__input--text"
          type="lastName"
          name="lastName"
          id="lastName"
          required
        >
        <label
          :class="lastNameLabelClasses"
          class="v-contact-form__label u-text-mars-title"
          for="lastName"
        >Last Name</label>
      </div>
    </div>
    <div class="v-contact-form__input-group">
      <div class="v-contact-form__input-wrapper">
        <input
          @click="phoneInputActive = true"
          @blur="phoneInputActive = false"
          v-model="phone"
          :class="phoneInputClasses"
          class="v-contact-form__input v-contact-form__input--text"
          type="text"
          name="phone"
          id="phone"
          required
        >
        <label
          :class="phoneLabelClasses"
          class="v-contact-form__label u-text-mars-title"
          for="phone"
        >Phone</label>
      </div>
      <div class="v-contact-form__input-wrapper">
        <input
          @click="emailInputActive = true"
          @blur="emailInputActive = false"
          v-model="email"
          :class="emailInputClasses"
          class="v-contact-form__input v-contact-form__input--text"
          type="email"
          name="email"
          id="email"
          required
        >
        <label
          :class="emailLabelClasses"
          class="v-contact-form__label u-text-mars-title"
          for="email"
        >Email</label>
      </div>
    </div>
    <div class="v-contact-form__input-wrapper">
      <textarea
        @click="messageInputActive = true"
        @blur="messageInputActive = false"
        v-model="message"
        :class="messageInputClasses"
        class="v-contact-form__input v-contact-form__input--textarea"
        style="resize: none;"
        name="message"
        id="message"
        required
      ></textarea>
      <label
        :class="messageLabelClasses"
        class="v-contact-form__label u-text-mars-title"
        for="message"
      >Message</label>
    </div>
    <div data-netlify-recaptcha="true"></div>
    <input type="submit" value="Send" class="v-contact-form__submit u-text-venus-title">
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      firstNameInputActive: false,
      lastNameInputActive: false,
      phoneInputActive: false,
      emailInputActive: false,
      messageInputActive: false,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    };
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
          this.firstNameInputActive || this.firstName
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
          this.lastNameInputActive || this.lastName
      };
    },
    phoneInputClasses() {
      return {
        "v-contact-form__input--active": this.phoneInputActive
      };
    },
    phoneLabelClasses() {
      return {
        "v-contact-form__label--active": this.phoneInputActive || this.phone
      };
    },
    emailInputClasses() {
      return {
        "v-contact-form__input--active": this.emailInputActive
      };
    },
    emailLabelClasses() {
      return {
        "v-contact-form__label--active": this.emailInputActive || this.email
      };
    },
    messageInputClasses() {
      return {
        "v-contact-form__input--active": this.messageInputActive
      };
    },
    messageLabelClasses() {
      return {
        "v-contact-form__label--active": this.messageInputActive || this.message
      };
    }
  }
};
</script>

<style lang="scss">
.v-contact-form {
  display: flex;
  flex-direction: column;

  &__input-group {
    display: flex;
  }

  &__input-wrapper {
    padding: $venus $mercury;
    position: relative;
    width: 100%;
  }

  &__label {
    left: $mercury;
    margin-left: $mercury;
    position: absolute;
    top: $venus;
    transition: all 0.1s ease-in;

    &--active {
      color: $gold;
      transform: translateY(-100%);
    }
  }

  &__input {
    border: solid inset 0.5px $black;
    font-family: "Heebo", sans-serif;
    transition: border 0.1s ease-in;
    width: 100%;

    &:focus {
      outline: none;
    }

    &--active {
      background-color: $grey;
      border: solid $pluto $gold;
    }

    &--text {
      padding-top: $pluto;
    }

    &--textarea {
      height: 100px;
    }
  }

  &__submit {
    align-self: center;
    background-color: $gold;
    border: none;
    border-radius: $pluto;
    color: $white;
    height: $neptune;
    transition: $transition-opacity;
    width: 30%;

    @include lg {
      align-self: flex-start;
    }

    &:hover {
      opacity: $opacity;
    }
  }
}
</style>

