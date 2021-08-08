<template>
  <h3>{{ counter }}hi</h3>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['numbers/normalizedCounter'];
        }
    }

}
</script>

<style>

</style>