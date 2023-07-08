<template> 
  <!-- <TheCharts/>  -->
  <TheAxios/>
</template>

<script> 
  import TheCharts from '@/components/TheCharts.vue'
  import TheAxios from './components/TheAxios.vue'

  export default { 
    name: 'App', 
    components: { 
      TheCharts,
      TheAxios
    } 
  } 
</script>

<style> 
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  text-align: center; 
  color: #2c3e50; 
  margin-top: 60px;
  }
</style>