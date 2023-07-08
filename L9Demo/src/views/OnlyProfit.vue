<template>
    <h3>This is Profit Page</h3>
    <ProfitDisplay/>
</template>

<script>
import ProfitDisplay from '@/components/ProfitDisplay.vue'
import firebaseApp from '@/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default {
    name: 'OnlyProfit',
    components : {
        ProfitDisplay
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    }
}
</script>
