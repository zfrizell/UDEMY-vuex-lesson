<template>
<div>{{ finalCounter }}</div>
 
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        // counter() {
        // return this.$store.getters.finalCounter;
        // }

        ...mapGetters('numbers', ['finalCounter'])
    }

}
</script>

<style>

</style>