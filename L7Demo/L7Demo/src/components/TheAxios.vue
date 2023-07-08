<template>
    <div>
        <h1>Axios Demo</h1>
        <h1>Current Bitcoin Price: {{ price }} USD</h1>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                price: null
            }
        },

        async mounted() {
            const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            console.log(response)
            this.price = response.data.bpi["USD"]["rate"]
        }
    }
</script>