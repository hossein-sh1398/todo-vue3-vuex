<template>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li>
            <router-link :to="{
                name: 'cart'
            }" class="btn btn-success btn-sm">
                <i class="bi bi-cart4"></i>
                <span class="badge bg-primary rounded ms-1">{{ count }}</span>
            </router-link>
        </li>
    </ul>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        let count = computed(() => store.getters['cart/getCount'])

        return {
            count
        }
    }
}

</script>

<style>
.router-link-active {
    border-bottom: 2px solid goldenrod !important;
    color: skyblue !important;
}
</style>