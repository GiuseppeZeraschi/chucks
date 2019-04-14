<template>
  <div class="v-mobile-nav">
    <div class="v-mobile-nav__links">
      <span
        @click.prevent="$emit('linkClicked')"
        v-for="(routerLink, index) in routerLinks"
        :key="index"
        class="v-mobile-nav__link-wrapper"
      >
        <router-link
          :to="routerLink.link"
          class="v-mobile-nav__link u-earth-title"
        >{{ routerLink.name }}</router-link>
      </span>
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
    }
  }
};
</script>

<style lang="scss">
.v-mobile-nav {
  background-color: $charcoal;
  height: 100%;
  overflow-x: none;
  padding: $sun $neptune $neptune $neptune;
  width: 100%;
  z-index: 1000;

  &__links {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__link-wrapper {
    display: flex;
    margin-bottom: $earth;
  }

  &__link {
    color: $gold;
    padding: $venus;
    text-decoration: none;
  }
}
</style>

