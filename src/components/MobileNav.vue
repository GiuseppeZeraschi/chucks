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
    <div class="v-mobile-nav__footer">
      <div class="v-mobile-nav__footer-social-links">
        <a
          :href="socialLink.href"
          target="_blank"
          v-for="(socialLink, index) in socialLinks"
          :key="index"
        >
          <i :class="socialLink.iconClass" class="fab v-mobile-nav__footer-social-link"></i>
        </a>
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
  background-color: $charcoal;
  height: 100%;
  width: 100%;
  z-index: 1000;

  @include lg {
    display: none;
  }

  &__links {
    align-items: center;
    border-bottom: $moon solid $gold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $sun $neptune $neptune $neptune;
  }

  &__link-wrapper {
    display: flex;
    margin-bottom: $earth;
  }

  &__link {
    color: $gold;
    padding: $venus;
    text-decoration: none;
    transition: $transition-opacity;

    &:hover {
      opacity: 0.6;
    }
  }

  &__footer {
    align-items: center;
    background-color: $black;
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
      color: $white;
      font-size: $earth;
      padding: $mercury;
      transition: $transition-opacity;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>

