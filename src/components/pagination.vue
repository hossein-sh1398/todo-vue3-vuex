<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: isInFirstPage }">
                    <button class="page-link" type="button" :disabled="isInFirstPage">Previous</button>
                </li>

                <li class="page-item" aria-current="page" v-for="page in pages" :key="page.name"
                    :class="{ 'active': page.isActive }">
                    <button class="page-link" @click="onClickPageChanged(page.name)" :disabled="page.isActive">{{ page.name
                    }}</button>
                </li>

                <li class="page-item" :class="{ disabled: isInLastPage }">
                    <button type="button" class="page-link" :disabled="isInLastPage">Next</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        totalPage: {
            type: Number,
            required: true,
        },
        prePage: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    setup(props, { emit }) {
        let isInFirstPage = computed(() => props.currentPage == 1)
        let isInLastPage = computed(() => props.currentPage == props.totalPage)
        let pages = computed(() => {
            let range = [];
            for (let i = 1; i <= props.totalPage; i++) {
                range.push({
                    name: i,
                    isActive: i == props.currentPage,
                })
            }
            return range
        })

        const onClickPageChanged = (page) => {
            emit('pagechanged', page)
        }

        return {
            isInFirstPage,
            isInLastPage,
            pages,
            onClickPageChanged
        }
    }
}
</script>