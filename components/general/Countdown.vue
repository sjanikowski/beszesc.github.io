<template>
  <div>
    <section class="text-3xl flex justify-center content-center flex-col mx-auto text-center"
    >Do 60-lecia</section>
    <section class="flex text-6xl justify-center content-center">
      <div class="days mr-2 relative">
        {{displayDays}} : {{displayHours}} : {{displayMinutes}} : {{displaySeconds}}
      </div>
      <!-- <div class="days mr-2 relative">
        {{displayDays}}
        <div class="label text-sm absolute bottom-0">dni</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours mr-2 relative">
        {{displayHours}}
        <div class="label text-sm absolute bottom-0">godzin</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="minutes mr-2 relative">
        {{displayMinutes}}
        <div class="label text-sm absolute bottom-0">minut</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="seconds mr-2 relative">
        {{displaySeconds}}
        <div class="label text-sm absolute bottom-0">sekund</div>
      </div> -->
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "countdown",
  data: () => ({
    displayDays: 100,
    displayHours: 23,
    displayMinutes: 59,
    displaySeconds: 59,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes(){
      return this._seconds * 60
    },
    _hours(){
      return this._minutes * 60
    },
    _days(){
      return this._hours * 24
    }
  },
  mounted(){
    this.showRemaining()
  },
  methods: {
    showRemaining(){
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(2024, 9, 0, 0, 0, 0, 0)
        const dist = end.getTime() - now.getTime()

        if (dist < 0){
          clearInterval(timer)
          return;
        }

        const days = Math.floor((dist / this._days))
        const hours = Math.floor((dist % this._days) / this._hours)
        const mins = Math.floor((dist % this._hours) / this._minutes)
        const secs = Math.floor((dist % this._minutes) / this._seconds)

        this.displayDays = days < 10 ? '0' + days : days
        this.displayHours = hours < 10 ? '0' + hours : hours
        this.displayMinutes = mins < 10 ? '0' + mins : mins
        this.displaySeconds = secs < 10 ? '0' + secs : secs
      }, 1000)
    }
  }
});
</script>

<style>
  /* .leading-snug {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  } */
</style>