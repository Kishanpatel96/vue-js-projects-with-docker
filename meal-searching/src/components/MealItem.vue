<script setup>
import YoutubeButton from "@/components/YoutubeButton.vue";

defineProps({
  meal: {
    required: true,
    type: Object,
  }
})
</script>

<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal }}">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover"/>
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube"></YoutubeButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>