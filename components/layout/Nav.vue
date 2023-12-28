<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white bg-transparent">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0"
    >
      <div id="logo" class="absolute top-[60px] left-[100px] w-[72px] h-[150px] z-50">
        <a
          class="no-underline"
          href="#"
        >
        <img src="../../assets/imgs/Logo_strona_B60-03.svg" alt="logo">
        </a>
      </div>
      <!-- do poprawienia - z-indexy -->
      <div id="insta" class="absolute top-[60px] right-[100px] z-50 opacity-50 hover:opacity-100">
        <a
          class="no-underline"
          href="#"
        >
        <img src="../../assets/imgs/Component_insta.svg" alt="insta">
        </a>
      </div>
      <div id="fb" class="absolute top-[130px] right-[100px] opacity-50 hover:opacity-100">
        <a
          class="no-underline"
          href="#"
        >
        <img src="../../assets/imgs/Component_fb.svg" alt="fb">
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          @click="mobileSidebar = !mobileSidebar"
          id="nav-toggle"
          class="flex items-center p-1 text-white-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="mobileSidebar ? '' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="pt-14 list-reset lg:flex justify-center flex-1 items-center">
          <li class="mx-4">
            <a
              class="inline-block uppercase py-2 px-4 font-bold no-underline hover:text-black hover:underline"
              href="#idea"
              >IDEA B60</a
            >
          </li>
          <li class="mx-4">
            <a
              class="inline-block uppercase no-underline font-bold hover:text-black hover:underline py-2 px-4"
              href="#zwiastun"
              >ZWIASTUN</a
            >
          </li>
          <li class="mx-4">
            <a
              class="inline-block uppercase no-underline font-bold hover:text-black hover:underline py-2 px-4"
              href="#program"
              >PROGRAM</a
            >
          </li>
          <li class="mx-4">
            <a
              class="inline-block uppercase no-underline font-bold hover:text-black hover:underline py-2 px-4"
              href="#wsparcie"
              >WSPARCIE</a
            >
          </li>
          <li class="mx-4">
            <a
              class="inline-block uppercase no-underline font-bold hover:text-black hover:underline py-2 px-4"
              href="#newsletter"
              >NEWSLETTER</a
            >
          </li>
          <li class="mx-4">
            <a
              class="inline-block uppercase no-underline font-bold hover:text-black hover:underline py-2 px-4"
              href="#kontakt"
              >KONTAKT</a
            >
          </li>
        </ul>
        <!-- <button
          id="navAction"
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Action
        </button> -->
      </div>
    </div>
    <!-- <hr class="border-b border-gray-100 opacity-25 my-0 py-0" /> -->
  </nav>
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

.navbar-active ul li a{
  color: #170F4F;
}
</style>
