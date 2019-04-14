<template>
  <div class="v-hamburger">
    <div class="v-hamburger__line"></div>
    <div class="v-hamburger__line"></div>
    <div class="v-hamburger__line u-margin-bottom-mercury"></div>
    <span class="v-hamburger__text u-mars-title">Menu</span>
  </div>
</template>

<script>
export default {
  name: "Hamburger"
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

  &:hover {
    opacity: 0.6;
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

