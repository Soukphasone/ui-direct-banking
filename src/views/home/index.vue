<template>
    <h2>Home</h2>

    <button @click="getStoreData">Click me</button>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { getStoreData, testApi } from './script'

onMounted(async () => {
    await testApi()
})
</script>