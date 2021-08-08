export default {

    login(context) {
        console.log('login');
        context.commit('login');
    },

    logout(context) {
        context.commit('logout')
    },

  
}