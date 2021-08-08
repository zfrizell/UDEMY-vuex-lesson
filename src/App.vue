<template>
  <base-container v-if="loggedStatus" title="Vuex">
    <TheCounter />
    <ChangeCounter />
    <FavouriteValue />
    <!-- <h3>{{ counter }}</h3> -->
    <button @click="addOne">Add 10</button>
  </base-container>

  <base-container title="Auth">
  <UserAuth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      // loggedStatus: true
    }
  },
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['loggedStatus']),
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      // this.$store.dispatch('increase', {value: 10});
    

      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10

      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>