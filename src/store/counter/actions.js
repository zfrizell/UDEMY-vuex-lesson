export default {
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
}