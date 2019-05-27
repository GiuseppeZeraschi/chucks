<template>
  <div class="v-navbar-links u-text-venus-alt">
    <router-link
      v-for="(routerLink, index) in routerLinks"
      :key="index"
      :to="routerLink.link"
      class="v-navbar-links__link"
    >
      {{ routerLink.name }}
      <div class="v-navbar-links__link--underline"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarLinks",
  props: {
    routerLinks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.v-navbar-links {
  display: none;
  width: 60%;

  @include lg {
    display: flex;
    justify-content: space-around;
  }

  &__link {
    align-items: center;
    color: $charcoal;
    display: flex;
    height: $saturn;
    padding: $mars;
    position: relative;
    text-decoration: none;
    transition: $transition-color;

    &:hover {
      color: $charcoal-light;
    }

    &:hover .v-navbar-links__link--underline {
      opacity: 1;
    }

    &--underline {
      background-color: $gold;
      bottom: 0;
      height: $mercury;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: $transition-opacity;
      width: 100%;
      z-index: 1000;
    }
  }
}
</style>

