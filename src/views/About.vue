<template>
  <div class="v-about v-section">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout>
      <img class="v-about__owners-image" src="@/assets/owners.jpeg" alt="Chuck's owners">
      <template slot="text">
        <div
          class="u-margin-bottom-mars"
        >Chuck's, your friendly neighbourhood cocktail bar. Serving up some old forgotten classics, great cognac cocktails and kickass signatures. We are an intimate, funky space where the relaxed mood and friendly service will take you out of your busy week.</div>
        <div class="u-margin-bottom-mars">
          Playing some fine old tunes from blues, jazz, funk, and Motown to hip hop and rap, we are a space for everyone.
          Our small food menu, consisting of fine cheeses and cured meats is available every day and night.
        </div>
        <div>
          If you’re looking for something a bit bigger, we also work with our neighbourhood eateries to provide additional options.
          We’re the perfect place for those who are running early, aren’t quite ready to call lunch or dinner quits yet or just want a general place to hang out and unwind.
        </div>
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
