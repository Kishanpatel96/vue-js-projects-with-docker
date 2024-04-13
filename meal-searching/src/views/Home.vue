<script setup>
import {onMounted, ref} from 'vue';
import axiosClient from "@/axiosClient.js";

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('list.php?i=list')
  ingredients.value = response.data;
})
</script>

<template>
  <div class="flex flex-col p-8">
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<style scoped>

</style>