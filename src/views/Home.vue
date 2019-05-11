<template>
  <div class="v-home v-section">
    <div class="u-margin-bottom-saturn"></div>
    <div class="v-home__content">
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
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import image1 from "@/assets/interior-1.jpg";
import image2 from "@/assets/interior-2.jpg";
import image3 from "@/assets/interior-3.jpg";

export default {
  name: "home",
  components: {
    Carousel,
    Slide
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
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-home {
}
</style>

