<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <CreateTask class="mb-3"></CreateTask>
            </div>
        </div>
        <div class="card" v-if="loading">
            <div class="card-body">
                <div class=" d-flex justify-content-xl-center">
                    <div class="spinner-border"></div>
                </div>
            </div>
        </div>
        <div class="card" v-else>
            <div class="card-header">
                Tasks List
            </div>
            <div class="card-body">
                <div class="row g-4">
                    <div class="col-md-3" v-for="task in tasks" :key="task.id">
                        <div class="card">
                            <div class="card-body" :class="{ 'bg-light': task.completed }">
                                <del v-if="task.completed">{{ task.title }}</del>
                                <span v-else>{{ task.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import CreateTask from './create-task.vue'

export default {
    setup() {
        const store = useStore()
        let loading = ref(true)
        const tasks = computed(() => store.getters.allTasks)

        async function fetchTasks() {
            await store.dispatch('fetchTasksAction')
            setTimeout(() => {
                loading.value = false
            }, 1000)
        }
        fetchTasks()

        return {
            tasks,
            fetchTasks,
            loading
        }
    },
    components: {
        CreateTask,
    }
}
</script>

<style></style>