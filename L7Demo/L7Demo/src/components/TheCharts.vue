<template> 
    <select v-model="selected"> 
    <option value="">Please select one </option> 
    <option>Line</option> 
    <option>Pie</option> 
    <option>Both</option>
    </select>,
    <br><br>

    <span>Selected: {{ selected }}</span>

    <div v-if="selected=='Line' || selected=='Both'"> 
    <h1>Line Chart</h1> 
    <button @click="updateMe()">Click to update the Line chart </button> 
    <line-chart class = 'user' width =500px :data = "chartdata" >
    </line-chart >
    </div>

    <div v-if="selected=='Pie' || selected=='Both'"> 
    <h1>Pie Chart</h1> 
    <button @click="updateMe2()"> Click to update the Pie Chart</button><br><br> 
    <pie-chart class ="user" width=500px :data="chartdata2" ></pie-chart>
    </div>
</template>

<script> 
    export default { 
        name:'TheCharts', 
        data() {
            return { 
                chartdata: {
                    'Monday': 2, 
                    'Tuesday': 5, 
                    'Wednesday': 2,
                    'Thursday': 5, 
                    'Friday':6
                },
                chartdata2: {
                    'Blueberry':44, 
                    'Strawberry':23
                },
                selected:""
            }
        },
        methods:{ 
            updateMe: function () { 
                this.chartdata = {
                    'Monday': Math.random()*5,
                    'Tuesday': 5, 
                    'Wednesday': Math.random()* 5, 
                    'Thursday': 5, 
                    'Friday':6
                }
            },
            updateMe2: function () { 
                this.chartdata2 = {
                    'Blueberry':Math.random()*30, 
                    'Strawberry':23,
                    'Blackberry':23}
            }
        }
    }
</script>

<style scoped>
    .user {
        margin: auto;
        border: 3px solid grey;
    }
</style>
    