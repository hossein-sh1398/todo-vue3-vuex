const moduleB = {
    namespaced: true,
    state: {
        count: 10,
    },
    getters: {
        getCount(state) {
            return state.count
        },
    },
    mutations: {
        increment(state, payload) {
            state.count += payload
        },
        decrement(state, payload) {
            state.count -= payload
        }
    },
    actions: {
        incrementAction(concept, payload) {
            concept.commit('increment', payload)
        },
        decrementAction(concept, payload) {
            concept.commit('decrement', payload)
        }
    }
}

export default moduleB;