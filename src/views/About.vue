<template>
  <div class="v-about v-section">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout>
      <img class="v-about__owners-image" src="@/assets/owners.jpeg" alt="Chuck's owners">
      <template slot="text">
        <div>"Your friendly, neighbourhood cocktail bar. Serving up some old forgotten classics, great cognac cocktails and kickass signatures. Chuck's is an intimate, funky space where the relaxed mood and friendly service will take you out of your busy week. Playing some fine old tunes from blues, jazz, funk, and motown to hip hop and rap, we are a space for everyone."</div>
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
