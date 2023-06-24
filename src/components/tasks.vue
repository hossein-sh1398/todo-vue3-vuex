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
                    <div class="col-md-4" v-for="task in tasks" :key="task.id">
                        <div class="card">
                            <div class="card-body d-flex justify-content-between" :class="{ 'bg-light': task.completed }">
                                <div>
                                    <del v-if="task.completed">{{ task.title }}</del>
                                    <span v-else>{{ task.title }}</span>
                                </div>
                                <div class="d-flex justify-content-between gap-2 align-items-center">
                                    <div class="fs-5">
                                        <i class="bi bi-check" v-if="!task.completed" @click="update(task.id)"></i>
                                        <i class="bi bi-check-all" v-else @click="update(task.id)"></i>
                                    </div>
                                    <a href="#" class="text-danger fs-5" @click.prevent="deleteTask(task.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <pagination :currentPage="paginationInfo.currentPage" :totalPage="paginationInfo.totalPage"
                    @pagechanged="pageChanged"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import CreateTask from './create-task.vue'
import Pagination from './pagination.vue'

export default {
    setup() {
        const store = useStore()
        let loading = ref(true)
        const tasks = computed(() => store.getters['todos/allTasks'])
        const paginationInfo = computed(() => store.getters['todos/getPaginationInfo'])

        async function fetchTasks(page = 1) {
            await store.dispatch('todos/fetchTasksAction', page)
            setTimeout(() => {
                loading.value = false
            }, 10)
        }

        fetchTasks()

        const pageChanged = (page) => {
            fetchTasks(page)
        }

        async function update(taskId) {
            loading.value = true
            await store.dispatch('todos/updateTaskAction', taskId)
            loading.value = false
        }

        async function deleteTask(taskId) {
            loading.value = true;
            await store.dispatch('todos/deleteTaskAction', taskId)
            loading.value = false
        }

        return {
            tasks,
            fetchTasks,
            loading,
            pageChanged,
            paginationInfo,
            update,
            deleteTask
        }
    },
    components: {
        CreateTask,
        Pagination
    }
}
</script>

<style></style>