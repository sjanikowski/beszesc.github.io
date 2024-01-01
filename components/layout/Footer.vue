<template>
  <footer id="kontakt" class="bg-inherit text-black">
    <div class="container ml-[340px] mr-[240px]">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-initial w-1/5">
          <p class="mt-2 md:mb-6 font-black">Jubileusz 60-lecia DDA <i>Beczka</i></p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="mailto:b60@dominikanie.pl"
                class="no-underline hover:underline "
                >b60@dominikanie.pl</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="tel:+48987654321"
                class="no-underline hover:underline "
                >987 654 321</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-initial w-[30%]">
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 font-extrabold">
              Dominikańskie Duszpasterstwo Akademickie <i>Beczka</i>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 font-medium">
              Klasztor Ojców Dominikanów<br>ul. Stolarska 12<br>31-043 Kraków
            </li>
          </ul>
        </div>
        <div class="flex-initial w-1/5 text-right font-bold">
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline"
                >FACEBOOK</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline"
                >INSTAGRAM</a
              >
            </li>
            <li class="mt-10 inline-block mr-2 md:block md:mr-0 font-medium">
              Copyright © B60 2023
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-footer",
});
</script>
