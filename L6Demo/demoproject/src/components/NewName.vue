<template>
    <FirstName :newFirstName = "newFirstName" @datadata = "childcall($event)" />
    <SecondName :newSecondName = "newSecondName" />
</template>

<script>
    import FirstName from '@/components/FirstName.vue'
    import SecondName from '@/components/SecondName.vue'

    export default {
        data() {
            return {
                newFirstName: "New John",
                newSecondName: "New Cena"
            }
        },
        components: {
            FirstName,
            SecondName
        },
        methods: {
            childcall(x) {
                this.newFirstName = x
            }
        }
    }
</script>