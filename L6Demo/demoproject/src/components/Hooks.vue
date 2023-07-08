<template>
    <h1>Hooks</h1>
    <h1>The counter is {{counter}}</h1>
    <button @click="increment">Increase count</button>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter += 1
        }
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
    }
}