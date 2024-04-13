<script setup>
import {computed, onMounted, watch} from "vue";
import store from "@/store/index.js";
import {useRoute} from "vue-router";
import Meals from "@/components/Meals.vue";

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>

<template>
  <div>
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters.split('')" :key="letter">
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="meals"/>
  </div>
</template>

<style scoped>

</style>