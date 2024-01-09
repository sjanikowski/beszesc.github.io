<template>
  <div id="main" class="w-full min-h-screen overflow-hidden leading-normal tracking-normal text-black duration-400 bg-[#FFF1E3]">
    <div class="w-full min-h-screen md:h-[100vh] p-5 pb-0 md:pt-[160px] md:pl-[240px] md:pr-[240px]">
      <div class="w-full md:h-1/2 pb-4 inline-block font-[0px]">
        <div class="md:w-1/3 md:float-left">
          <img class="w-[50px] h-[104px] md:w-[75px] md:h-[156px]" src="../assets/imgs/b60_logo.svg" alt="logo" width="50" height="104">
        </div>
        <div class="w-1/2 md:w-2/3 text-right font-medium text-[26px] l:text-[32px] xl:text-[38px] 2xl:text-[45px] float-right tracking-[0.55px]"><b class="font-black">Strona jeszcze <i>w&nbsp;budowie</i></b><br>Premiera już&nbsp;wkrótce</div>
      </div>
      <div class="w-full font-medium flex justify-between gap-x-20 flex-col md:flex-row pt-6">
        <div class="flex-[0_1_25%]">
          <div class="pb-5 w-4/5 pt-10 md:pt-0 md:w-full">
            Aktualne informacje o najbliższych wydarzeniach znajdziesz na naszych <b>mediach&nbsp;społecznościowych</b>
          </div>
          <ul class="list-reset mb-6 font-bold tracking-[0.5px]">
            <li class="block mr-2 md:mr-0">
              <a
                href="https://www.facebook.com/DABeczka"
                class="no-underline hover:text-[#FE4B0F]"
                >FACEBOOK</a
              >
            </li>
            <li class="block mr-2 md:mr-0">
              <a
                href="https://www.instagram.com/ddabeczka/"
                class="no-underline hover:text-[#FE4B0F]"
                >INSTAGRAM</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-[1_1_25%]">
          <p class="pt-10 md:pt-0 min-[2222px]:mb-5 min-[1758px]:mb-11 min-[1410px]:mb-[68px] md:mb-11 md:pb-0">Masz pytania?<br><b>Skontaktuj się z nami</b></p>
          <ul class="list-reset mb-6">
            <li class="block mr-2 md:mr-0 font-bold tracking-[0.55px]">
              <a
                href="mailto:b60@dominikanie.pl"
                class="no-underline hover:text-[#FE4B0F]"
                >b60@dominikanie.pl</a
              >
            </li>
            <li class="block mr-2 md:mr-0">
              <a
                href="tel:+48124231613"
                class="no-underline hover:text-[#FE4B0F] font-medium"
                >12 423 16 13 (7:30-15:30)</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-[1_1_25%]">
          <div class="pt-10 md:pt-0 min-[2222px]:mb-5 min-[1758px]:mb-11 min-[1404px]:mb-[68px] min-[1315px]:mb-11 md:mb-5">
            <b>Wesprzyj</b> organizację<br>Jubileuszu B60
          </div>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://wspieramdabeczka.dominikanie.pl/"
                class="no-underline hover:text-[#FE4B0F] font-black tracking-[0.5px]"
                >LINK DO ZBIÓRKI</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-[1_1_25%] md:text-right font-bold">
          <img align="right" class="pt-10 md:pt-0 w-[275px] h-[220px] md:w-[295px] md:h-[240px]" src="../assets/imgs/bld.svg" alt="bld" width="295" height="240">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Countdown from "~/components/general/Countdown.vue";

export default Vue.extend({
  components: { Countdown },
  name: "IndexPage",
  data() {
    return {
      scrollY: 0,
    };
  },
  mounted() {
    this.scrollY = window.scrollY - window.innerHeight;
    // Listen to the scroll event to update the scrollY property dynamically
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    changePig(fillColor: string) {
      var piggy = document.getElementById("piggy");
      if (piggy != null) {
        piggy.style.fill = fillColor;
      }
    },
  },

  watch: {
    scrollY(newValue: number) {
    
    }
  }
});
</script>

<style>

</style>