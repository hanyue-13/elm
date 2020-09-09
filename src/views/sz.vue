<template>
<div id="app">
  <p></p>
</div>
</template>
<style scoped>

</style>
<script>
export default {
data(){
  return{
    year:'',
    month:'',
    day:'',
    hours:'',
    minutes:'',
    ss:'',
    seconds:'',
     week:'',
  },
    setInterval(() => {
    this.year = new Date().getFullYear()
    this.month = new Date().getMonth() + 1
    this.day = new Date().getDate()
    this.hours = new Date().getHours()
    this.minutes = new Date().getMinutes()
    const ss = new Date().getTime() % 60000
    this.seconds = (ss - (ss % 1000)) / 1000
    const day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    this.week = day[new Date().getDay()]
  }, 1000)
}
}
</script>