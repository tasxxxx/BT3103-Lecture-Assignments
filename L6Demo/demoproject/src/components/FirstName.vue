<template>
    <h1>My first name is : {{firstName}}</h1>
    <h1>My new first name is {{newFirstName}}</h1>
    <button @click = "ChangeFirstName">Change my First Name</button>
</template>

<script>
    export default {
        data() {
            return {
                firstName: "John"
            }
        },
        props: {
            newFirstName: String
        },
        // declare what you need to emit and provide data through $emit
        // The child is emitting datadata event with value "John"
        emits:["datadata"],
        methods: {
            ChangeFirstName() {
                this.$emit('datadata', "John")
            }
        }
    }
</script>