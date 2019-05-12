<template>
  <div class="v-image-text-layout__content">
    <div class="v-image-text-layout__image-wrapper">
      <slot/>
    </div>
    <div v-if="dividerMobile" class="v-image-text-layout__divider-mobile"></div>
    <div class="v-image-text-layout__text-wrapper">
      <slot name="text"/>
      <div v-if="dividerDesk" class="v-image-text-layout__divider-desk"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTextLayout",
  props: {
    dividerMobile: {
      type: Boolean,
      default: true
    },
    dividerDesk: {
      type: Boolean,
      default: true
    }
  }
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

    @include lg {
      align-items: flex-start;
      flex-direction: row;
      justify-content: center;
    }
  }

  &__image-wrapper {
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    width: 100%;
  }

  &__divider-mobile {
    background-color: $gold;
    height: $mercury;
    margin: $uranus 0;
    width: 15%;

    @include lg {
      display: none;
    }
  }

  &__text-wrapper {
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    width: 100%;
    text-align: center;

    @include lg {
      margin-left: $uranus;
      text-align: start;
    }
  }

  &__divider-desk {
    @include lg {
      background-color: $gold;
      height: $mercury;
      margin-top: $earth;
      width: 25%;
    }
  }
}
</style>
