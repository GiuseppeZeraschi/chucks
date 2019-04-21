<template>
  <div class="v-modal">
    <div class="u-text-venus">{{ message }}</div>
    <router-link :to="link">
      <button class="u-text-venus-title u-button-primary">{{ buttonText }}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    message: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.v-modal {
  align-items: center;
  background-color: $charcoal;
  border-radius: $mercury;
  box-shadow: $box-shadow;
  color: $white;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-around;
  padding: $neptune;
  text-align: center;
  width: 350px;
}
</style>
