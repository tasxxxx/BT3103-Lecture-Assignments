<template>
    <h1>My second name is : {{secondName}}</h1>
    <h1>My new second name is {{newSecondName}}</h1>
</template>

<script>
    export default {
        data() {
            return {
                secondName: "Cena"
            }
        },
        props: {
            newSecondName: String
        }
    }
</script>