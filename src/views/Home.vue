<template>
  <div class="v-home">
    <div class="u-margin-bottom-saturn"></div>
    <carousel
      autoplay
      :autoplay-timeout="4000"
      loop
      :per-page="1"
      pagination-color="#ab8f03"
      pagination-active-color="#e2c326"
    >
      <slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" :alt="slide.alt">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

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
          src: "@/assets/entrance.jpeg",
          alt: "Chuck's image 1"
        },
        {
          src: "@/assets/busy.jpeg",
          alt: "Chuck's image 2"
        },
        {
          src: "@/assets/cocktail-1.jpeg",
          alt: "Chuck's image 3"
        },
        {
          src: "@/assets/shaker.jpeg",
          alt: "Chuck's image 4"
        }
      ]
    };
  }
};
</script>
