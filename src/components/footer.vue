<template>
    <div>
        {{ props.title }}
    </div>
    <p>name : {{ props.name }}</p>
</template>

<script setup>
    import { defineProps } from 'vue';
   
    const props = defineProps(['title', 'name'])
</script>