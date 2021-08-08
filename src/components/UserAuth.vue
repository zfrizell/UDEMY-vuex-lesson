<template>
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    methods: {
        ...mapActions(['login', 'logout'])
    }

}
</script>

<style>

</style>