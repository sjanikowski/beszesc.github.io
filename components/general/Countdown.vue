<template>
  <div class="w-3/4 grid grid-cols-4 text-center p-10 border-[1px] rounded border-black">
    <div>
      <div class="text-[52px] font-black">{{ displayDays }}</div>
      <div class="text-[16px] font-medium p-2">DNI</div>
    </div>
    <div>
      <div class="text-[52px] font-black">{{ displayHours }}</div>
      <div class="text-[16px] font-medium p-2">GODZINY</div>
    </div>
    <div>
      <div class="text-[52px] font-black">{{ displayMinutes }}</div>
      <div class="text-[16px] font-medium p-2">MINUTY</div>
    </div>
    <div>
      <div class="text-[52px] font-black">{{ displaySeconds }}</div>
      <div class="text-[16px] font-medium p-2">SEKUNDY</div>
    </div>
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
</style>