<template>
  <div class="v-contact v-section">
    <div class="u-margin-bottom-saturn"></div>
    <div class="v-contact__content">
      <div class="v-contact__box u-text-venus-alt">
        <div v-for="(contactDetail, index) in contactDetails" :key="index">
          <a class="v-contact__link" target="_blank" :href="contactDetail.href">
            <i :class="contactDetail.iconClass" class="v-contact__link-icon"></i>
            <div class="v-contact__link-detail">{{ contactDetail.info }}</div>
          </a>
        </div>
      </div>
      <div class="v-contact__divider-mobile"></div>

      <contact-form></contact-form>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  components: { ContactForm },
  data() {
    return {
      contactDetails: [
        {
          info: "0491 570 156",
          iconClass: "fas fa-phone",
          href: "tel:0491570156"
        },
        {
          info: "info@chuckssydney.com",
          iconClass: "fas fa-envelope",
          href: "mailto:info@chuckssydney.com"
        },
        {
          info: "instagram.com/chuckssydney",
          iconClass: "fab fa-instagram",
          href: "https://www.instagram.com/chuckssydney/"
        },
        {
          info: "facebook.com/chuckssydney",
          iconClass: "fab fa-facebook",
          href: "https://www.facebook.com/chuckssydney/"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-contact {
  &__content {
    align-items: center;
    color: $charcoal;
    display: flex;
    flex-direction: column;

    @include lg {
      align-items: flex-start;
      flex-direction: row-reverse;
      justify-content: center;
    }
  }

  &__box {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    padding: $venus;

    @include lg {
      align-items: flex-start;
      height: 250px;
      margin-left: $saturn;
    }
  }

  &__link {
    align-items: center;
    color: $black;
    display: inline-flex;
    padding: $mercury;
    text-decoration: none;
    transition: $transition-opacity;

    &:hover {
      opacity: $opacity;
    }

    &-icon {
      color: $gold;
      font-size: $earth;
    }

    &-detail {
      margin-left: $venus;
    }
  }

  &__divider-mobile {
    background-color: $gold;
    height: $mercury;
    margin: $uranus 0;
    width: 30%;

    @include lg {
      display: none;
    }
  }
}
</style>
