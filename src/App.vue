<template>
  <div id="app">
    <nav class="v-navbar" :class="navClasses">
      <div class="v-navbar__wrapper">
        <div class="v-navbar__hamburger" @click="displayMobileNav = !displayMobileNav">
          <hamburger :mobile-nav-active="displayMobileNav"></hamburger>
        </div>
        <logo></logo>
        <navbar-links :router-links="routerLinks"></navbar-links>
        <social-links :social-links="socialLinks"></social-links>
      </div>
    </nav>
    <transition name="fade">
      <mobile-nav
        v-if="displayMobileNav"
        @linkClicked="closeMobileNav"
        :social-links="socialLinks"
        :router-links="routerLinks"
      ></mobile-nav>
    </transition>
    <router-view v-if="!displayMobileNav" class="v-router-view"/>
    <main-footer :social-links="socialLinks"></main-footer>
  </div>
</template>

<script>
import MobileNav from "@/components/MobileNav";
import NavbarLinks from "@/components/NavbarLinks";
import Hamburger from "@/components/Hamburger";
import SocialLinks from "@/components/SocialLinks";
import Logo from "@/components/Logo";
import MainFooter from "@/components/MainFooter";

export default {
  components: {
    NavbarLinks,
    MobileNav,
    Hamburger,
    SocialLinks,
    MainFooter,
    Logo
  },
  data() {
    return {
      isDesktop: null,
      isAtTheTop: true,
      displayMobileNav: false,
      routerLinks: [
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
      ],
      socialLinks: [
        {
          href: "https://www.instagram.com/chuckssydney/",
          iconClass: "fab fa-instagram"
        },
        {
          href: "https://www.facebook.com/chuckssydney/",
          iconClass: "fab fa-facebook"
        }
      ]
    };
  },
  methods: {
    closeMobileNav() {
      this.displayMobileNav = false;
    },
    scrollY() {
      window.scrollY === 0
        ? (this.isAtTheTop = true)
        : (this.isAtTheTop = false);
    },
    viewportWidth() {
      window.innerWidth > 992
        ? (this.isDesktop = true)
        : (this.isDesktop = false);
    }
  },
  computed: {
    navClasses() {
      return {
        "v-navbar--scrolled": !this.isAtTheTop
      };
    }
  },
  watch: {
    isDesktop() {
      this.$store.dispatch("setScreensize", this.isDesktop);
      if (this.isDesktop) this.displayMobileNav = false;
    }
  },
  created() {
    window.innerWidth > 992
      ? (this.isDesktop = true)
      : (this.isDesktop = false);
    window.addEventListener("scroll", this.scrollY);
    window.addEventListener("resize", this.viewportWidth);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollY);
    window.removeEventListener("resize", this.viewportWidth);
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  overflow: hidden;
  // padding-bottom accounts for footer height
  padding-bottom: $footer-height;
  position: relative;
}

.router-link-active {
  color: $gold-light;
}

.v-section {
  padding: $jupiter $neptune;

  @include lg {
    padding: $jupiter $saturn;
  }
}

.v-navbar {
  background-color: $white;
  box-shadow: $box-shadow;
  height: $saturn;
  position: fixed;
  top: 0;
  transition: background-color 0.3s ease-in, box-shadow 0.3s ease-in;
  width: 100vw;
  z-index: 1000;

  &--scrolled {
    background-color: rgba(255, 255, 255, 0.95);
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
