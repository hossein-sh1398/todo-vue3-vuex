import { createStore } from 'vuex'
import Swal from 'sweetalert2'
import apiTask from '../api/apiTask.js'

const store = createStore({
    state: {
        tasks: [{ id: 12, title: 'title' }],
        paginationInfo: {
            currentPage: 1,
            totalPage: 0,
        },
    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        getPaginationInfo(state) {
            return state.paginationInfo
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        setPaginationInfo(state, paginationInfo) {
            state.paginationInfo = paginationInfo
        }
    },
    actions: {
        async fetchTasksAction({ commit }, page) {
            try {
                const response = await apiTask.get('tasks?page=' + page)

                commit('setTasks', response.data.tasks)
                commit('setPaginationInfo', response.data.paginationInfo)
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
                const response = await apiTask.post('tasks', {
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