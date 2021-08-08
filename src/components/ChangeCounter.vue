<template>
  <button @click="increment">add 2</button>
  <button @click="increase({value: 5})">add 2</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {


    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        // }

        ...mapActions('numbers', ['increment', 'increase'])

        // ...mapActions({
        //     inc: 'increment',
        //     increase: 'increase'
        // })

    }

}
</script>

<style>

</style>