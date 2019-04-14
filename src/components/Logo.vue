<template>
  <a href="/">
    <img class="v-logo" src="@/assets/logo.png" alt="Chuck's Logo">
  </a>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss">
.v-logo {
  cursor: pointer;
  height: $saturn;
  right: 50%;
  padding: $mars;
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  width: $saturn;

  @include lg {
    height: $sun;
    left: -$earth;
    top: 100%;
    width: $sun;
  }
}
</style>

