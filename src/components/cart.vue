<template>
    <div>
        <table class="table table-bordered table-striped text-center" v-if="cart.length">
            <thead>
                <tr>
                    <th>عنوان</th>
                    <th>تصویر</th>
                    <th>قیمت</th>
                    <th>تعداد</th>
                    <th>جمع قیمت</th>
                    <th>
                        <button class="btn btn-danger" @click="clear">حذف</button>
                    </th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="item in cart">
                    <td>{{ item.name }}</td>
                    <td><img :src="item.image" style="height: 70px;" alt=""></td>
                    <td>{{ item.price }} <span>تومان</span></td>
                    <td>
                        <span class="btn btn-warning btn-sm p-1" @click="decrement(item.id)">
                            <strong><i class="bi bi-dash-lg"></i></strong>
                        </span>
                        {{ item.quantity }}
                        <span class="btn btn-success btn-sm p-1" @click="increment(item.id)"><strong><i
                                    class="bi bi-plus"></i></strong></span>
                    </td>
                    <td>{{ item.price * item.quantity }} <span>تومان</span></td>
                    <td>
                        <a href="" class="text-danger" @click.prevent="remove(item.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-trash" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>
                        </a>

                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="1">
                        <a href="" class="btn btn-primary btn-sm">پرداخت</a>
                    </td>
                    <td class="5">
                        <span>{{ total }}</span><span class="ms-2">تومان</span>
                    </td>
                </tr>
            </tfoot>
        </table>
        <p v-else class="alert alert-info " style="text-align: right;">سبد خرید شما خالی هست</p>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()

        let cart = computed(() => store.getters['cart/getCart'])
        function increment(id) {
            store.dispatch('cart/incrementAction', id)
        }
        function decrement(id) {
            store.dispatch('cart/decrementAction', id)
        }
        function remove(id) {
            store.dispatch('cart/removeAction', id)
        }
        function clear() {
            store.dispatch('cart/clearAction')
        }
        let total = computed(() => store.getters['cart/getTotal'])
        return {
            cart,
            increment,
            decrement,
            remove,
            clear,
            total
        }
    }
}

</script>

<style>
td {
    vertical-align: middle;
}

.router-link-active {
    border-bottom: 2px solid goldenrod !important;
    color: skyblue !important;
}
</style>