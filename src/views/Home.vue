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
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magnam mollitia voluptatibus ab harum, adipisci incidunt eaque, enim obcaecati beatae itaque. Distinctio nobis delectus laborum, libero atque ipsum autem inventore consequuntur doloribus aliquam repudiandae unde similique excepturi! Quia id excepturi, accusantium quas voluptatibus voluptate adipisci vero. Consectetur qui error quaerat.</div>
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
