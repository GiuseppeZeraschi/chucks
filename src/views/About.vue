<template>
  <div class="v-about v-section">
    <div class="u-margin-bottom-saturn"></div>
    <div class="v-about__content">
      <div v-show="imageLoaded" class="v-about__image-wrapper">
        <transition name="fade">
          <div v-show="!imageLoaded" class="v-about__image-tombstone"></div>
        </transition>
        <transition name="fade">
          <img
            @load="imageLoaded = true"
            class="v-about__owners-image"
            src="@/assets/owners.jpeg"
            alt="Chuck's owners"
          >
        </transition>
      </div>
      <div class="v-about__owners-image-tombstone"></div>
      <div class="v-about__divider-mobile"></div>
      <div class="v-about__text-wrapper">
        <div>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor, tenetur maiores vero illum architecto aut magni repellat voluptatum numquam aspernatur culpa dolore beatae vitae eos facilis, distinctio consequuntur amet sequi est. Quo nisi quos harum quasi mollitia laudantium, reprehenderit quidem! Qui totam ipsum non ea ipsam, id vitae, praesentium accusantium quae, nisi veniam inventore consequuntur expedita reiciendis eligendi enim?"</div>
        <div class="v-about__divider-desk"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageLoaded: false
    };
  }
};
</script>

<style lang="scss">
.v-about {
  &__content {
    align-items: center;
    color: $charcoal;
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-style: italic;

    @include lg {
      align-items: flex-start;
      flex-direction: row;
      justify-content: center;
    }
  }

  &__image-wrapper {
    height: 400px;
    position: relative;
    width: 400px;
  }

  &__image-tombstone {
    background-color: $grey;
    border-radius: $mercury;
    height: 400px;
    position: absolute;
    width: 400px;
  }

  &__owners-image {
    border-radius: $mercury;
    box-shadow: $box-shadow;
    height: 400px;
    position: absolute;
    width: 400px;
    z-index: 10;
  }

  &__divider-mobile {
    background-color: $gold;
    height: $mercury;
    margin: $uranus 0;
    width: 30%;

    @include lg {
      display: none;
    }
  }

  &__text-wrapper {
    max-width: 400px;
    max-height: 400px;
    text-align: center;

    @include lg {
      margin-left: $uranus;
      text-align: start;
      width: 240px;
    }
  }

  &__divider-desk {
    @include lg {
      background-color: $gold;
      height: $mercury;
      margin-top: $earth;
      width: 30%;
    }
  }
}
</style>
