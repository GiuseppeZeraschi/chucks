<template>
  <div id="app">
    <nav class="v-navbar" :class="navClasses">
      <div class="v-navbar__wrapper">
        <span class="v-navbar__hamburger" @click.prevent="displayMobileNav = !displayMobileNav">
          <hamburger></hamburger>
        </span>
        <logo></logo>
        <navbar-links :router-links="routerLinks"></navbar-links>
        <social-links></social-links>
      </div>
    </nav>
    <transition name="fade">
      <mobile-nav v-if="displayMobileNav" @linkClicked="closeMobileNav" :router-links="routerLinks"></mobile-nav>
    </transition>
    <router-view v-if="!displayMobileNav" class="v-app-view"/>
  </div>
</template>

<script>
import MobileNav from "@/components/MobileNav";
import NavbarLinks from "@/components/NavbarLinks";
import Hamburger from "@/components/Hamburger";
import SocialLinks from "@/components/SocialLinks";
import Logo from "@/components/Logo";

export default {
  components: {
    NavbarLinks,
    MobileNav,
    Hamburger,
    SocialLinks,
    Logo
  },
  data() {
    return {
      isAtTheTop: true,
      displayMobileNav: false,
      routerLinks: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Cocktails",
          link: "/cocktails"
        },
        {
          name: "Location",
          link: "/location"
        },
        {
          name: "Contact",
          link: "/contact"
        },
        {
          name: "About",
          link: "/about"
        }
      ]
    };
  },
  methods: {
    closeMobileNav() {
      this.displayMobileNav = false;
    }
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
.v-navbar {
  background-color: $white;
  box-shadow: $box-shadow;
  height: $saturn;
  position: fixed;
  top: 0;
  transition: box-shadow 0.3s ease-in;
  transition: background-color 0.3s ease-in;
  width: 100vw;
  z-index: 100;

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
    display: contents;
  }
}
</style>

