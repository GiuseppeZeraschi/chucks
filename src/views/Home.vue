<template>
  <div class="v-home v-section">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout :divider-mobile="false" :divider-desk="false">
      <carousel
        autoplay
        :autoplay-timeout="4000"
        loop
        :per-page="1"
        pagination-color="#ab8f03"
        pagination-active-color="#e2c326"
      >
        <slide v-for="(slide, index) in slides" :key="index">
          <img width="100%" :src="slide.src" :alt="slide.alt">
        </slide>
      </carousel>
      <template slot="text">
        <h1 class="u-text-neptune-title u-margin-bottom-earth">Chuck's</h1>
        <div
          class="u-margin-bottom-uranus"
        >An intimate cocktail bar in Darlinghurst. Serving classics and creative house cocktails. Jazz, motown, blues, funk, RnB, and, hip hop in a candlelit pre-industrial building. Exposed brick, black steel, hand carved marble. All the popcorn you can eat.</div>
        <router-link to="/location">
          <button class="u-button u-button-primary u-text-venus-title u-decoration-none">Find us</button>
        </router-link>
        <router-link to="/cocktails">
          <button
            class="u-button u-button-secondary u-text-venus-title u-decoration-none u-margin-left-venus"
          >Menu</button>
        </router-link>
      </template>
    </image-text-layout>
  </div>
</template>

<script>
import ImageTextLayout from "@/components/ImageTextLayout";
import { Carousel, Slide } from "vue-carousel";
import image1 from "@/assets/interior-1.jpg";
import image2 from "@/assets/interior-2.jpg";
import image3 from "@/assets/interior-3.jpg";
import image4 from "@/assets/interior-4.jpg";

export default {
  name: "home",
  components: {
    Carousel,
    Slide,
    ImageTextLayout
  },
  data() {
    return {
      slides: [
        {
          src: image1,
          alt: "Chuck's image 1"
        },
        {
          src: image2,
          alt: "Chuck's image 2"
        },
        {
          src: image3,
          alt: "Chuck's image 3"
        },
        {
          src: image4,
          alt: "Chuck's image 4"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.VueCarousel-pagination {
  margin-bottom: $uranus !important;

  @include lg {
    margin-bottom: 0 !important;
  }
}

.VueCarousel-dot-container {
  margin-top: $earth !important;
}

.VueCarousel-dot {
  margin-top: 0 !important;
}
</style>
