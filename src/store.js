
import { createStore } from 'vuex';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
                
            state.counter+= 2;
    },
    increase(state, payload) {
        console.log(state);
        state.counter+= payload.value;
    }
    },
    actions: {
        increment(context) {
            console.log('incremented')
            setTimeout(function() {

            context.commit('increment');

        }, 2000)

        },
        increase(context, payload) {
            context.commit('increase', payload)
            console.log(context);
        }
    },
    getters: {
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
    },
}



const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        
    },
    actions: {

        login(context) {
            console.log('login');
            context.commit('login');
        },

        logout(context) {
            context.commit('logout')
        },

      
    },
    getters: {
        loggedStatus(state) {
            return state.isLoggedIn;
        },
 
    }
})

export default store;