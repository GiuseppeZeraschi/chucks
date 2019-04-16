<template>
  <div class="v-social-links">
    <a
      :href="socialLink.href"
      target="_blank"
      v-for="(socialLink, index) in socialLinks"
      :key="index"
    >
      <i :class="socialLink.iconClass" class="fab v-social-links__link"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  props: {
    socialLinks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.v-social-links {
  display: none;

  @include lg {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: $saturn;
  }

  &__link {
    color: $gold;
    font-size: $earth;
    padding: $mercury;
    transition: $transition-opacity;

    &:hover {
      opacity: $opacity;
    }
  }
}
</style>
