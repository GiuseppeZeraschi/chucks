<template>
  <div class="v-footer">
    <div class="v-footer__social-links u-margin-bottom-venus">
      <a
        :href="socialLink.href"
        target="_blank"
        v-for="(socialLink, index) in socialLinks"
        :key="index"
      >
        <i :class="socialLink.iconClass" class="fab v-footer__social-link"></i>
      </a>
    </div>
    <div class="v-footer__copyright u-text-mars">&copy; 2019 Chuck's. All rights reserved</div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  props: {
    socialLinks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.v-footer {
  align-items: center;
  background-color: $black;
  border-top: $border-gold;
  bottom: 0;
  color: $white;
  display: flex;
  flex-direction: column;
  padding: $earth;
  position: absolute;
  width: 100%;

  @include lg {
    padding: $earth $uranus;
  }

  &__social-links {
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: $jupiter;
  }

  &__social-link {
    color: $gold;
    font-size: $earth;
    padding: $mercury;
  }
}
</style>
