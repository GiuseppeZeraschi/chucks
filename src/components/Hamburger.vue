<template>
  <div class="v-hamburger">
    <div
      v-for="index in 3"
      :key="index"
      :class="{ 'v-hamburger__line--active': mobileNavActive }"
      class="v-hamburger__line"
    ></div>
    <div
      :class="{ 'v-hamburger__text--active': mobileNavActive }"
      class="v-hamburger__text u-text-mars-title"
    >Menu</div>
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
  width: $uranus;

  @include lg {
    display: none;
  }

  &__line {
    background-color: $gold;
    height: $pluto;
    transition: $transition-background-color;
    width: 100%;

    &--active {
      background-color: $gold-light;
    }
  }

  &__text {
    color: $gold;
    position: absolute;
    top: 28px;
    transition: $transition-color;
    width: 28px;

    &--active {
      color: $gold-light;
    }
  }
}
</style>
