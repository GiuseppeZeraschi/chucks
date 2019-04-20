<template>
  <div class="v-about v-section">
    <div class="u-margin-bottom-saturn"></div>
    <div class="v-contact__box">
      <div v-for="(contactDetail, index) in contactDetails" :key="index">
        <a class="v-contact__link" target="_blank" :href="contactDetail.href">
          <i :class="contactDetail.iconClass" class="v-contact__link-icon"></i>
          <div class="v-contact__link-detail">{{ contactDetail.info }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  &__link {
    align-items: center;
    color: $black;
    display: inline-flex;
    margin-bottom: $venus;
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
}
</style>
