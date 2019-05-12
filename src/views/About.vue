<template>
  <div class="v-about v-section">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout>
      <img class="v-about__owners-image" src="@/assets/owners.jpeg" alt="Chuck's owners">
      <template slot="text">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis obcaecati reiciendis doloremque dicta laborum facilis tempora, aspernatur libero minima laudantium aut magni, distinctio, porro quo ut qui praesentium sequi voluptatibus? Unde neque excepturi possimus consectetur repellendus ipsam illum ad, quidem eligendi, debitis ex inventore, magnam maiores officia illo dolor deleniti?</div>
      </template>
    </image-text-layout>
  </div>
</template>

<script>
import ImageTextLayout from "@/components/ImageTextLayout";

export default {
  components: { ImageTextLayout }
};
</script>

<style lang="scss">
.v-about {
  &__owners-image {
    box-shadow: $box-shadow;
  }
}
</style>
