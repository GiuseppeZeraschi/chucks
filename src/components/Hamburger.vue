<template>
  <div :class="{ 'v-hamburger--active': mobileNavActive }" class="v-hamburger">
    <div class="v-hamburger__line"></div>
    <div class="v-hamburger__line"></div>
    <div class="v-hamburger__line"></div>
    <div class="v-hamburger__text u-text-mars-title">Menu</div>
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
$hamburger-height: 32px;

.v-hamburger {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: $hamburger-height;
  justify-content: space-around;
  left: $earth;
  padding: $mercury;
  position: absolute;
  transition: $transition-opacity;
  width: $uranus;

  &--active {
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
    position: absolute;
    top: 28px;
    width: 28px;
  }
}
</style>
