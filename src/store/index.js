import axios from 'axios'
import { createStore } from 'vuex'
import Swal from 'sweetalert2'

const store = createStore({
    state: {
        tasks: [{ id: 12, title: 'title' }]
    },
    getters: {
        allTasks(state) {
            return state.tasks
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        }
    },
    actions: {
        async fetchTasksAction({ commit }) {
            try {
                const response = await axios.get('http://localhost:8000/api/tasks')
                commit('setTasks', response.data.tasks)
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 3000
                })
            }
        },
        async createTaskAction({ dispatch }, title) {
            try {
                const response = await axios.post('http://localhost:8000/api/tasks', {
                    title: title
                })

                Swal.fire({
                    title: response.data.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top'
                })
                dispatch('fetchTasksAction')
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'خطا',
                    text: err.response.data.message,
                    timer: 3000
                })
            }
        }
    }
})

export default store