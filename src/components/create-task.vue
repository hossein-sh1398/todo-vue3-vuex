<template>
    <div class="card">
        <div class="card-header">
            Create Tasks
        </div>
        <div class="card-body">
            <form @submit.prevent="createTasks">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <input type="text" v-model="title" class="form-control">
                    </div>
                    <div class="col-md-auto">
                        <button class="btn btn-primary btn-sm">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        let title = ref()
        const createTasks = async () => {
            let a = await store.dispatch('createTaskAction', title.value)
        }

        return {
            createTasks, title
        }
    }
}
</script>

<style></style>