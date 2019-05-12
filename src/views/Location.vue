<template>
  <div class="v-section v-location">
    <div class="u-margin-bottom-saturn"></div>
    <image-text-layout>
      <iframe
        class="v-location__map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.5331175152737!2d151.2126431!3d-33.8759213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae16a333df65%3A0xc012bb678179deac!2s119+Riley+St%2C+Darlinghurst+NSW+2010%2C+Australia!5e0!3m2!1sen!2suk!4v1556393550019!5m2!1sen!2suk"
        frameborder="0"
      ></iframe>
      <template slot="text">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet quod, commodi officiis expedita laudantium, nihil saepe quasi pariatur magnam modi ipsa porro. Inventore, eveniet nisi. Voluptates quis temporibus minima odit! Rem totam inventore molestias sit labore quae aspernatur ab soluta cupiditate! Alias, magni iure illo natus cupiditate ex corporis.</div>
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
.v-location {
  &__map {
    height: 400px;
    width: 100%;
  }
}
</style>

