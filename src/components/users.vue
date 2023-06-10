<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="alert alert-info p-1">لیست کاربران</h6>
                    <router-link :to="{name:'createUser'}" class="btn btn-success btn-sm">ایجاد</router-link>
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user, index) in users" :key="index">
                        <div class="d-flex justify-content-between align-items-center">
                            <router-link :to="{
                                name:'singleUser',
                                params:{
                                    id: user.id
                                },
                                query: {
                                    name:'hossein',
                                    family:'shirineagd'
                                },
                                hash: '#getstarted'
                            }">{{ user.name }}</router-link>
                            <div>
                                <router-link class="btn btn-warning btn-sm me-1" :to="'users/' + user.id">ویرایش</router-link>
                                <router-link class="btn btn-danger btn-sm" :to="'users/' + user.id">حذف</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col">
               <router-view></router-view>
            </div>
        </div>
    </div>
    <hr>
    <button @click="goTo('/')">Go Home</button>
</template>
<script setup>
    import axios from 'axios'
    import { useRouter } from 'vue-router';
    import {onMounted, ref} from 'vue'

    let users = ref([])
    let router = useRouter()
    function goTo(path) {
        router.push(path)
    }

    onMounted(async () => {
        let list = await axios.get('http://localhost:8000/api/users');
        users.value = list.data.users
    })

</script>