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
                        <p v-if="errors.title" class="text-danger">
                            {{ errors.title[0] }}
                        </p>
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
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        let title = ref('')

        let errors = computed(() => store.getters['todos/getErrors'])
        const createTasks = async () => {
            try {
                let res = await store.dispatch('todos/createTaskAction', title.value)
                if (res) {
                    title.value = ''
                }

            } catch (err) {

            }
        }

        return {
            createTasks, title, errors
        }
    }
}
</script>

<style></style>