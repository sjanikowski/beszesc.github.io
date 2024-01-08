<template>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-nav",
  data() {
    return {
      scrollY: 0,
      mobileSidebar: false,
    };
  },
  mounted() {
    this.scrollY = window.scrollY;

    // Listen to the scroll event to update the scrollY property dynamically
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },

  watch: {
    scrollY(newValue: number) {
      var naokr_txt = document.getElementById("naokr_txt");
      var naokr = document.getElementById("naokr");
      if (naokr_txt != undefined) {
        naokr_txt.style.transform=`rotate(${window.scrollY * 0.1}deg)`
      }
      if (naokr != undefined) {
        if (newValue > 100) {
          naokr.classList.remove("opacity-100");
          naokr.classList.add("opacity-50");
        } else {
          naokr.classList.remove("opacity-50");
          naokr.classList.add("opacity-100");
        }
      }
      // var navaction = document.getElementById("navAction");
      var header = document.getElementById("header");
      var navToggle = document.getElementById("nav-toggle");
      var navContent = document.getElementById("nav-content");
      if (newValue > 10) {
        navToggle?.classList.remove("text-white-800");
        navToggle?.classList.remove("hover:text-gray-900");
        navToggle?.classList.add("hover:text-white-800");
        navToggle?.classList.add("text-gray-900");
        // navContent?.classList.remove("bg-white");
        // navContent?.classList.remove("text-black");
        // navContent?.classList.add("bg-black");
        // navContent?.classList.add("text-white");
        header?.classList.add("navbar-active");
      } else {
        navToggle?.classList.remove("hover:text-white-800");
        navToggle?.classList.remove("text-gray-900");
        navToggle?.classList.add("text-white-800");
        navToggle?.classList.add("hover:text-gray-900");
        // navContent?.classList.remove("bg-white");
        // navContent?.classList.remove("text-black");
        // navContent?.classList.add("bg-black");
        // navContent?.classList.add("text-white");
        header?.classList.remove("navbar-active");
      }
    },
  },
});
</script>

<style>
a {
  font-weight: 600;
  font-style: normal !important;
  color: rgb(0, 0, 0);
}

</style>
