export default {
    testAuth(state, getters, rootState, rootGetters){
        //backup access.
        console.log(getters, rootState, rootGetters)
        return state.isLoggedIn;
    },

    finalCounter(state) {
        return state.counter * 2;
    },
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;

        if (finalCounter > 100) {
            return 100
        }

        return finalCounter;
    }
}