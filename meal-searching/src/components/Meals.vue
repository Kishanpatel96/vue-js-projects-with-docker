<script setup>
import MealItem from "@/components/MealItem.vue";

defineProps({
  meals: Array
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    There is no meal
  </div>
</template>

<style scoped>

</style>