<template>
  <div class="v-about v-section">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout>
      <img class="v-about__owners-image" src="@/assets/owners.jpeg" alt="Chuck's owners">
      <template slot="text">
        <div>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor, tenetur maiores vero illum architecto aut magni repellat voluptatum numquam aspernatur culpa dolore beatae vitae eos facilis, distinctio consequuntur amet sequi est. Quo nisi quos harum quasi mollitia laudantium, reprehenderit quidem! Qui totam ipsum non ea ipsam, id vitae, praesentium accusantium quae, nisi veniam inventore consequuntur expedita reiciendis eligendi enim?"</div>
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
