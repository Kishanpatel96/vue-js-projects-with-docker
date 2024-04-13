<script setup>
import {computed, onMounted, ref} from "vue";
import axiosClient from "@/axiosClient.js";

const ingredients = ref([])
const keyword = ref('')
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
});

onMounted(() => {
  axiosClient.get('list.php?i=list')
      .then(({data}) => {
        ingredients.value = data.meals
      })
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input type="text" v-model="keyword" class="w-full bg-white rounded border-2 border-gray-200 mb-3"
           placeholder="Search for ingredients..">
    <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient} }"
                 v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
                 class="bg-white rounded p-3 mb-3 shadow block text-decoration-none text-black">
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<style scoped>

</style>