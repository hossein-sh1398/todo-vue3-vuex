import Swal from 'sweetalert2'
import apiTask from '../../api/apiTask.js'

const todos = {
    namespaced: true,
    state: {
        tasks: [{ id: 12, title: 'title' }],
        paginationInfo: {
            currentPage: 1,
            totalPage: 0,
        },
        errors: [],
    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        getErrors(state) {
            return state.errors
        },
        getPaginationInfo(state) {
            return state.paginationInfo
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        setErrors(state, errors) {
            state.errors = errors
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
        async createTaskAction({ dispatch, commit }, title) {
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

                commit('setErrors', [])

                return true
            } catch (err) {
                if (err.response.status === 422) {
                    commit('setErrors', err.response.data.errors)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'خطا',
                        text: err.response.data.message,
                        timer: 3000
                    })
                }
                return false
            }
        },
        async updateTaskAction({ dispatch }, taskId) {
            try {
                const response = await apiTask.put('tasks/' + taskId)
                dispatch('fetchTasksAction')
                Swal.fire({
                    title: response.data.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top'
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'خطا',
                    text: err.response.data.message,
                    timer: 3000
                })
            }
        },
        async deleteTaskAction({ dispatch }, taskId) {
            try {
                const response = await apiTask.delete('tasks/' + taskId)
                dispatch('fetchTasksAction')
                Swal.fire({
                    title: response.data.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top'
                })
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
}
export default todos;