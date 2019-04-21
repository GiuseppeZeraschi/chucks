<template>
  <div class="v-mobile-nav">
    <div class="u-margin-bottom-saturn"></div>
    <div class="v-mobile-nav__links">
      <div
        @click.prevent="$emit('linkClicked')"
        v-for="(routerLink, index) in routerLinks"
        :key="index"
        class="v-mobile-nav__link-wrapper"
      >
        <router-link
          :to="routerLink.link"
          class="v-mobile-nav__link u-text-earth-title"
        >{{ routerLink.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNav",
  props: {
    routerLinks: {
      type: Array,
      required: true
    },
    socialLinks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.v-mobile-nav {
  background-color: $white;
  height: 100vh;
  // margin-bottom accounts for footer height
  margin-bottom: -$footer-height;
  position: absolute;
  width: 100%;
  z-index: 100;

  @include lg {
    display: none;
  }

  &__links {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    padding: $uranus $neptune $saturn $neptune;
  }

  &__link-wrapper {
    display: flex;
  }

  &__link {
    color: $charcoal;
    padding: $venus;
    text-decoration: none;
  }

  &__footer {
    align-items: center;
    background-color: $black;
    border-top: $border-gold;
    color: $white;
    display: flex;
    justify-content: center;
    padding: $earth;
    width: 100%;

    &-social-links {
      align-items: center;
      display: flex;
      justify-content: space-around;
      width: $jupiter;
    }

    &-social-link {
      color: $gold;
      font-size: $earth;
      padding: $mercury;
      transition: $transition-color;

      &:hover {
        color: $gold-light;
      }
    }
  }
}
</style>
