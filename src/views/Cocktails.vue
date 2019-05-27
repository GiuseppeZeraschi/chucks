<template>
  <div class="v-cocktails v-section">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout :divider-desk="false">
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
        <tabs class="u-text-mars-alt" :menu="menu"/>
      </template>
    </image-text-layout>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
import ImageTextLayout from "@/components/ImageTextLayout";
import { Carousel, Slide } from "vue-carousel";
import image1 from "@/assets/cocktail-1.jpg";
import image2 from "@/assets/cocktail-2.jpg";
import image3 from "@/assets/cocktail-3.jpg";
import image4 from "@/assets/cocktail-4.jpeg";

export default {
  components: {
    Tabs,
    ImageTextLayout,
    Carousel,
    Slide
  },
  data() {
    return {
      slides: [
        {
          src: image1,
          alt: "Cocktail image 1"
        },
        {
          src: image2,
          alt: "Cocktail image 2"
        },
        {
          src: image3,
          alt: "Cocktail image 3"
        },
        {
          src: image4,
          alt: "Cocktail image 4"
        }
      ],
      menu: [
        {
          tabName: "Cocktails",
          drinks: [
            {
              name: "Sinnerman",
              ingredients:
                "Mount Gay Rum, Cynar, Mint, Lemon, Cinnamon Bitters",
              price: 19
            },
            {
              name: "Hendrick Lamar",
              ingredients:
                "Hendrick's Gin, Dolin Blanc, Passionfruit, Peach Bitters",
              price: 20
            },
            {
              name: "Chuck's Berry",
              ingredients:
                "Bombay Sapphire Gin, Apricot Brandy, Raspberry, Lime",
              price: 18
            },
            {
              name: "Tropic Like It's Hot",
              ingredients: "Havana Blanco, Aperol, Coffee, Pineapple, Lemon",
              price: 20
            },
            {
              name: "Pharoche Punch",
              ingredients:
                "Maker's Mark Bourbon, Luxardo Maraschino, Mint, Honey, Lemon",
              price: 20
            },
            {
              name: "Phar Side",
              ingredients: "Ketel One Vodka, Kiwi, Lime, Mint",
              price: 18
            },
            {
              name: "Notorious FXP",
              ingredients:
                "Espolon Blanco Tequila, Lime, Velvet Falernum, Grapefruit",
              price: 18
            }
          ],
          visible: true
        },
        {
          tabName: "Classics",
          drinks: [
            {
              name: "Aviation",
              ingredients:
                "Bombay Sapphire Gin, Luxardo Maraschino, Lemon, Creme de Violette",
              price: 20
            },
            {
              name: "Vieux Carre",
              ingredients:
                "Bulleit Rye, Cognac, Punt e Mes Sweet Vermouth, Dom Benedictine, Peach Bitters",
              price: 20
            },
            {
              name: "Sidecar",
              ingredients: "Cognac, Cointreau, Lemon, Orange Bitters",
              price: 19
            },
            {
              name: "Boulevardier",
              ingredients:
                "Bulleit Rye Punt e Mes Sweet Vermouth, Campari, Cherry Bitters",
              price: 20
            },
            {
              name: "Negroni Blanco",
              ingredients:
                "Botanist Gin, Cocchi Americano, Lillet, Orange Bitters",
              price: 20
            }
          ],
          visible: false
        },
        {
          tabName: "Specials",
          drinks: [
            {
              name: "Gin & Juice",
              ingredients: "Bombay Sapphire Gin, Fresh Apple Juice",
              price: 12
            },
            {
              name: "Jack & Juice",
              ingredients: "Jack Daniels, Fresh Apple Juice",
              price: 12
            },
            {
              name: "Vodka & Juice",
              ingredients: "Ketel One Vodka, Fresh Apple Juice",
              price: 12
            }
          ],
          visible: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-cocktails .VueCarousel-pagination {
  display: none;
}
</style>

