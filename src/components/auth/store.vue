<template>
    <div class="card">
        <div class="card-header">
            <div class="text-center">Store Component</div>
        </div>
        <div class="card-body">
            <p>count: {{ count }}</p>
            <button class="btn btn-outline-primary" @click="increment">Increment</button>
            <button class="btn btn-outline-secondary" @click="decrement">Decrement</button>
            <hr>
            <p>countB: {{ countB }}</p>
            <button class="btn btn-outline-primary" @click="incrementB">IncrementB</button>
            <button class="btn btn-outline-secondary" @click="decrementB">DecrementB</button>
        </div>
        <div class="card-footer">

        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    setup() {
        const store = useStore()

        let count = computed(() => {
            return store.getters['moduleA/getCount']
        })

        function increment() {

            store.dispatch('moduleA/incrementAction', 100)
            // store.commit('moduleA/increment', 10)
        }

        function decrement() {
            store.dispatch('moduleA/decrementAction', 100)
            // store.commit('decrement')
        }

        let countB = computed(() => {
            return store.getters['moduleB/getCount']
        })

        function incrementB() {

            store.dispatch('moduleB/incrementAction', 1000)
            // store.commit('moduleA/increment', 10)
        }

        function decrementB() {
            store.dispatch('moduleB/decrementAction', 1000)
            // store.commit('decrement')
        }

        return {
            count,
            increment,
            decrement,
            countB,
            incrementB,
            decrementB,
        }
    }
}
</script>