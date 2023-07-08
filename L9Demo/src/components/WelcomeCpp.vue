<template>
    <h1>Welcome to the CPP</h1>
</template>

<script>
console.log("in WC")
import firebaseApp from '@/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth"
export default {
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

<style scoped>
h1{
  background-color: rgb(129, 184, 99);
  /* display: inline-block; */
  text-align: center;
}
</style>
