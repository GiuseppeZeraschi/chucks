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
        <div class="u-margin-bottom-earth u-bold">119 Riley Street, Darlinghurst 2010</div>
        <div>Nestled away just off the bustling junction of Stanley Street and Riley Street in Darlinghurst (next to Verde). Inconspicuously located, impressively placed.</div>
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

