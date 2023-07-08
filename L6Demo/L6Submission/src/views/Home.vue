<script>
  import WelcomeCpp from '@/components/WelcomeCpp.vue'
  import AddCoin from '@/components/AddCoin.vue'
  import ProfitDisplay from '@/components/ProfitDisplay.vue'

  export default {
    name: 'App',
    components: {
      WelcomeCpp,
      AddCoin,
      ProfitDisplay
    },
    data() {
      return {
        refreshComp: 0
      }
    },
    methods: {
      change() {
        this.refreshComp += 1
      }
    }
  }
</script>

<template>
  <WelcomeCpp/>
  <AddCoin @added="change"/>
  <ProfitDisplay :key="refreshComp"/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
</style>