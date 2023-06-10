import { ref } from 'vue';

export let useCounter = (n) => {
    let counter = ref(0)

    function increment() {
        counter.value += n;
    }

    function decrement() {
        counter.value--;
    }

    return {
        increment,
        decrement,
        counter,
    }

}