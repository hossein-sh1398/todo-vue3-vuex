<template>
    <h3>نام : {{ user.name }}</h3>
    <h3>ایمیل : {{ user.email }}</h3>
    <hr>
    query String : {{ queryString }}
    <hr>
    query Hash : {{ queryHash }}
  
    <hr>
    <button @click="goTo">Go Home</button>
</template>
<script setup>
    import axios from 'axios'

    import { onMounted, ref} from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    let route = useRoute()
    let user = ref('')
    let queryString = ref(route.query);
    let queryHash = ref(route.hash);
    
    let router = useRouter()
    function goTo() {
        router.push({
            name:'usersList'
        })
    }
    onMounted(async () => {
        let id = route.params.id
        let res = await axios.get('http://localhost:8000/api/users/' + id);
        user.value = res.data.user
    })
</script>