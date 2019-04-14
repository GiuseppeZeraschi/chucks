<template>
  <div class="v-social-links">
    <a href="https://www.instagram.com/chuckssydney/" target="_blank">
      <i class="fab fa-instagram v-social-links__link"></i>
    </a>
    <a href="https://www.facebook.com/chuckssydney/" target="_blank">
      <i class="fab fa-facebook v-social-links__link"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks"
};
</script>

<style lang="scss">
.v-social-links {
  display: none;

  @include lg {
    display: flex;
    justify-content: space-between;
    width: $saturn;
  }

  &__link {
    color: $gold;
    font-size: $earth;
    padding: $mercury;
    transition: opacity 0.3 ease-in;

    &:hover {
      opacity: 0.6;
    }

    @include lg {
      font-size: $neptune;
    }
  }
}
</style>

