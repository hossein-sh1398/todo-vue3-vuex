<template>
    <div class="row gy-3 mb-5">
        <div class=" col-md-4 align-items-center col-lg-3" v-for="product in products" :key="product.id">
            <div class="card shadow">
                <div class="card-img-top mt-2">
                    <img :src="product.image" height="200" class=" img-fluid" alt="">
                </div>
                <div class="card-body">
                    <h5 class="text-center my-2 card-title">{{ product.name }}</h5>
                    <p class=" card-text">{{ product.description }}</p>
                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="badge bg-info">{{ product.price }}</span>
                        <button @click="addToCart(product)" class="btn btn-success btn-sm">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        const products = computed(() => {
            return store.getters['products/getProducts']
        })

        const addToCart = product => store.dispatch('cart/addToCartAction', product)


        return {
            products,
            addToCart,
        }
    }
}

</script>