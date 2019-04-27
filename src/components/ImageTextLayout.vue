<template>
  <div class="v-image-text-layout__content">
    <div class="v-image-text-layout__image-wrapper">
      <slot/>
    </div>
    <div class="v-image-text-layout__divider-mobile"></div>
    <div class="v-image-text-layout__text-wrapper">
      <slot name="text"/>
      <div class="v-image-text-layout__divider-desk"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTextLayout"
};
</script>

<style lang="scss">
.v-image-text-layout {
  &__content {
    align-items: center;
    color: $charcoal;
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-style: italic;

    @include lg {
      align-items: flex-start;
      flex-direction: row;
      justify-content: center;
    }
  }

  &__image-wrapper {
    box-shadow: $box-shadow;
    max-width: 400px;
    max-height: 400px;
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

  &__text-wrapper {
    max-width: 400px;
    max-height: 400px;
    text-align: center;

    @include lg {
      margin-left: $uranus;
      text-align: start;
      width: 240px;
    }
  }

  &__divider-desk {
    @include lg {
      background-color: $gold;
      height: $mercury;
      margin-top: $earth;
      width: 30%;
    }
  }
}
</style>

