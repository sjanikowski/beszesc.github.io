(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{310:function(t,e,n){"use strict";n.r(e);n(90);var o=n(0),d=Object(o.b)({name:"countdown",data:function(){return{displayDays:100,displayHours:23,displayMinutes:59,displaySeconds:59}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},mounted:function(){this.showRemaining()},methods:{showRemaining:function(){var t=this,e=setInterval((function(){var n=new Date,o=new Date(2024,8,29,20,20,0,0).getTime()-n.getTime();if(o<0)clearInterval(e);else{var d=Math.floor(o/t._days),l=Math.floor(o%t._days/t._hours),r=Math.floor(o%t._hours/t._minutes),c=Math.floor(o%t._minutes/t._seconds);t.displayDays=d<10?"0"+d:d,t.displayHours=l<10?"0"+l:l,t.displayMinutes=r<10?"0"+r:r,t.displaySeconds=c<10?"0"+c:c}}),1e3)}}}),l=n(36),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"w-full sm:w-3/4 grid grid-cols-4 text-center p-10 border-y-2 sm:border-[1px] sm:rounded border-black"},[e("div",[e("div",{staticClass:"text-[28px] sm:text-[52px] font-black"},[t._v(t._s(t.displayDays))]),t._v(" "),e("div",{staticClass:"text-[9px] sm:text-[16px] font-medium p-2"},[t._v("DNI")])]),t._v(" "),e("div",[e("div",{staticClass:"text-[28px] sm:text-[52px] font-black"},[t._v(t._s(t.displayHours))]),t._v(" "),e("div",{staticClass:"text-[9px] sm:text-[16px] font-medium p-2"},[t._v("GODZINY")])]),t._v(" "),e("div",[e("div",{staticClass:"text-[28px] sm:text-[52px] font-black"},[t._v(t._s(t.displayMinutes))]),t._v(" "),e("div",{staticClass:"text-[9px] sm:text-[16px] font-medium p-2"},[t._v("MINUTY")])]),t._v(" "),e("div",[e("div",{staticClass:"text-[28px] sm:text-[52px] font-black"},[t._v(t._s(t.displaySeconds))]),t._v(" "),e("div",{staticClass:"text-[9px] sm:text-[16px] font-medium p-2"},[t._v("SEKUNDY")])])])}),[],!1,null,null,null);e.default=component.exports}}]);