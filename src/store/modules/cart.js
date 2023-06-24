import Swal from 'sweetalert2'
import products from './products'

const cart = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters: {
        getCart(state) {
            return state.cart
        },
        getCount(state) {
            return state.cart.length
        },
        getTotal(state) {
            return state.cart.reduce((sum, product) => (product.price * product.quantity) + sum, 0);
        }
    },
    mutations: {
        addToCart(state, product) {
            let item = state.cart.find(p => p.id == product.id)
            if (item) {
                item.quantity++
            } else {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            }

            Swal.fire({
                title: "added to cart",
                icon: 'success',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        increment(state, id) {
            let item = state.cart.find(product => product.id == id)
            console.log(item)
            if (item) {
                item.quantity++
                    Swal.fire({
                        title: "Increment product",
                        icon: 'success',
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000,
                        toast: true,
                        position: 'top'
                    })

                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        decrement(state, id) {
            let item = state.cart.find(product => product.id == id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                        Swal.fire({
                            title: "Increment product",
                            icon: 'success',
                            showConfirmButton: false,
                            timerProgressBar: true,
                            timer: 3000,
                            toast: true,
                            position: 'top'
                        })

                    localStorage.setItem('cart', JSON.stringify(state.cart))
                }
            }
        },
        remove(state, id) {
            let items = state.cart.filter(product => product.id != id)

            Swal.fire({
                title: "remove product",
                icon: 'success',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })

            state.cart = items

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        clear(state) {
            state.cart = []

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
    },
    actions: {
        addToCartAction({ commit }, product) {
            commit('addToCart', product)
        },
        incrementAction({ commit }, id) {
            commit('increment', id)
        },
        decrementAction({ commit }, id) {
            commit('decrement', id)
        },
        removeAction({ commit }, id) {
            commit('remove', id)
        },
        clearAction({ commit }) {
            commit('clear')
        }
    }
}

export default cart;