<template>
  <div class="v-contact v-section">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout class="v-contact__content">
      <contact-form></contact-form>
      <template slot="text">
        <div class="v-contact__box u-text-venus">
          <a
            @mouseover="phone.isHovered = true"
            @mouseleave="phone.isHovered = false"
            class="v-contact__link"
            target="_blank"
            :href="phone.href"
          >
            <i
              :class="[ phone.iconClass, { 'v-contact__link-icon--hovered': phone.isHovered }]"
              class="v-contact__link-icon"
            ></i>
            <div
              :class="{ 'v-contact__link-detail--hovered': phone.isHovered }"
              class="v-contact__link-detail"
            >{{ isDesktop ? phone.info : phone.shorthand }}</div>
          </a>
          <a
            @mouseover="email.isHovered = true"
            @mouseleave="email.isHovered = false"
            class="v-contact__link"
            target="_blank"
            :href="email.href"
          >
            <i
              :class="[ email.iconClass, { 'v-contact__link-icon--hovered': email.isHovered }]"
              class="v-contact__link-icon"
            ></i>
            <div
              :class="{ 'v-contact__link-detail--hovered': email.isHovered }"
              class="v-contact__link-detail"
            >{{ isDesktop ? email.info : email.shorthand }}</div>
          </a>
          <a
            @mouseover="instagram.isHovered = true"
            @mouseleave="instagram.isHovered = false"
            class="v-contact__link"
            target="_blank"
            :href="instagram.href"
          >
            <i
              :class="[ instagram.iconClass, { 'v-contact__link-icon--hovered': instagram.isHovered }]"
              class="v-contact__link-icon"
            ></i>
            <div
              :class="{ 'v-contact__link-detail--hovered': instagram.isHovered }"
              class="v-contact__link-detail"
            >{{ isDesktop ? instagram.info : instagram.shorthand }}</div>
          </a>
          <a
            @mouseover="facebook.isHovered = true"
            @mouseleave="facebook.isHovered = false"
            class="v-contact__link"
            target="_blank"
            :href="facebook.href"
          >
            <i
              :class="[ facebook.iconClass, { 'v-contact__link-icon--hovered': facebook.isHovered }]"
              class="v-contact__link-icon"
            ></i>
            <div
              :class="{ 'v-contact__link-detail--hovered': facebook.isHovered }"
              class="v-contact__link-detail"
            >{{ isDesktop ? facebook.info : facebook.shorthand }}</div>
          </a>
        </div>
      </template>
    </image-text-layout>
  </div>
</template>

<script>
import ImageTextLayout from "@/components/ImageTextLayout";
import ContactForm from "@/components/ContactForm";
import { mapState } from "vuex";

export default {
  components: { ContactForm, ImageTextLayout },
  data() {
    return {
      phone: {
        info: "0434 278 994",
        shorthand: "Phone",
        iconClass: "fas fa-phone",
        href: "tel:0434278994",
        isHovered: false
      },
      email: {
        info: "chaplgroup@outlook.com",
        shorthand: "Email",
        iconClass: "fas fa-envelope",
        href: "mailto:chaplgroup@outlook.com",
        isHovered: false
      },
      instagram: {
        info: "instagram.com/chuckssydney",
        shorthand: "Instagram",
        iconClass: "fab fa-instagram",
        href: "https://www.instagram.com/chuckssydney/",
        isHovered: false
      },
      facebook: {
        info: "facebook.com/chuckssydney",
        shorthand: "Facebook",
        iconClass: "fab fa-facebook",
        href: "https://www.facebook.com/chuckssydney/",
        isHovered: false
      }
    };
  },
  computed: {
    ...mapState({
      isDesktop: state => state.isDesktop
    })
  }
};
</script>

<style lang="scss">
.v-contact {
  &__content {
    flex-direction: column-reverse;

    @include lg {
      flex-direction: initial;
    }
  }

  &__box {
    align-items: center;
    display: flex;
    flex-direction: column;

    @include lg {
      align-items: flex-start;
      margin-top: $venus;
    }
  }

  &__link {
    align-items: center;
    color: $black;
    display: inline-flex;
    padding: $mercury;
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: $uranus;

      @include lg {
        margin-bottom: $earth;
      }
    }

    &-icon {
      color: $gold;
      font-size: $earth;
      transition: $transition-color;

      &--hovered {
        @include lg {
          color: $gold-light;
        }
      }
    }

    &-detail {
      margin-left: $venus;
      transition: $transition-opacity;

      &--hovered {
        @include lg {
          opacity: $opacity;
        }
      }
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
