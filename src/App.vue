<template>
  <div id="app">
    <nav class="v-navbar" :class="navClasses">
      <div class="v-navbar__wrapper">
        <div class="v-navbar__hamburger">
          <div class="v-navbar__hamburger-line"></div>
          <div class="v-navbar__hamburger-line"></div>
          <div class="v-navbar__hamburger-line u-margin-bottom-mercury"></div>
          <span class="v-navbar__hamburger-text u-small-title">Menu</span>
        </div>
        <a href="/">
          <img class="v-navbar__logo" src="@/assets/logo.png" alt="Chuck's Logo">
        </a>
        <div class="v-navbar__links">
          <router-link class="v-navbar__link" to="/">
            Home
            <div class="v-navbar__link--underline"></div>
          </router-link>
          <router-link class="v-navbar__link" to="/cocktails">
            Cocktails
            <div class="v-navbar__link--underline"></div>
          </router-link>
          <router-link class="v-navbar__link" to="/location">
            Location
            <div class="v-navbar__link--underline"></div>
          </router-link>
          <router-link class="v-navbar__link" to="/contact">
            Contact
            <div class="v-navbar__link--underline"></div>
          </router-link>
          <router-link class="v-navbar__link" to="/about">
            About
            <div class="v-navbar__link--underline"></div>
          </router-link>
        </div>
        <div class="v-navbar__social-links">
          <a href="https://www.instagram.com/chuckssydney/" target="_blank">
            <i class="fab fa-instagram v-navbar__social-link"></i>
          </a>
          <a href="https://www.facebook.com/chuckssydney/" target="_blank">
            <i class="fab fa-facebook v-navbar__social-link"></i>
          </a>
        </div>
      </div>
    </nav>
    <router-view class="v-view"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAtTheTop: true
    };
  },
  computed: {
    navClasses() {
      return {
        "v-navbar--scrolled": !this.isAtTheTop
      };
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      window.scrollY === 0
        ? (this.isAtTheTop = true)
        : (this.isAtTheTop = false);
    });
  }
};
</script>

<style lang="scss">
.v-view {
  padding: 0 $earth;

  @include lg {
    padding: 0 $uranus;
  }
}

.v-navbar {
  background-color: $white;
  box-shadow: $box-shadow;
  height: $saturn;
  position: fixed;
  transition: box-shadow 0.3s ease-in;
  transition: background-color 0.3s ease-in;
  width: 100vw;
  z-index: 1000;

  &--scrolled {
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: none;
  }

  &__wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding: 0 $earth;
    position: relative;

    @include lg {
      padding: 0 $uranus;
    }
  }

  &__hamburger {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: $neptune;
    justify-content: space-around;
    left: $earth;
    padding: $mercury;
    position: absolute;
    width: $neptune;

    @include lg {
      display: none;
    }

    &-line {
      background-color: $black;
      height: $pluto;
      width: 100%;
    }

    &-text {
      line-height: 0;
    }
  }

  &__logo {
    cursor: pointer;
    height: $saturn;
    right: 50%;
    padding: $mars;
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    width: $saturn;

    @include lg {
      height: $sun;
      left: -$earth;
      top: 100%;
      width: $sun;
    }
  }

  &__links {
    display: none;
    width: 50%;

    @include lg {
      display: flex;
      justify-content: space-around;
    }
  }

  &__link {
    align-items: center;
    color: $black;
    display: flex;
    height: $saturn;
    padding: $mars;
    position: relative;
    text-decoration: none;

    &:hover .v-navbar__link--underline {
      display: initial;
    }

    &--underline {
      background-color: $gold;
      bottom: 0;
      display: none;
      height: $mercury;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  &__social-links {
    display: flex;
    justify-content: space-between;
    width: $uranus;

    @include lg {
      justify-content: space-around;
      width: $sun;
    }
  }

  &__social-link {
    color: $black;
    font-size: $venus;
    padding: $mercury;
    transition: opacity 0.3 ease-in;

    &:hover {
      opacity: 0.6;
    }

    @include lg {
      font-size: $earth;
    }
  }
}
</style>

