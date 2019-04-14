<template>
  <div :class="{ 'v-hamburger--active': mobileNavActive }" class="v-hamburger">
    <div class="v-hamburger__line"></div>
    <div class="v-hamburger__line"></div>
    <div class="v-hamburger__line u-margin-bottom-mercury"></div>
    <span class="v-hamburger__text u-text-mars-title">Menu</span>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    mobileNavActive: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
.v-hamburger {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: $neptune;
  justify-content: space-around;
  left: $earth;
  padding: $mercury;
  position: absolute;
  transition: $transition-opacity;
  width: $neptune;

  &--active {
    opacity: $opacity;
  }

  &:hover {
    opacity: $opacity;
  }

  @include lg {
    display: none;
  }

  &__line {
    background-color: $gold;
    height: $pluto;
    width: 100%;
  }

  &__text {
    color: $gold;
    line-height: 0;
  }
}
</style>

