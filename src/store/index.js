import { createStore } from 'vuex'
import todos from './modules/todos.js'
import products from './modules/products.js'
import cart from './modules/cart.js'

const store = createStore({
    modules: {
        todos,
        products,
        cart,
    }
})

export default store