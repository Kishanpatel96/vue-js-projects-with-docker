<script setup>
import {computed, onMounted, ref} from "vue";
import Meals from "@/components/Meals.vue";
import store from "@/store/index.js";
import {useRoute} from "vue-router";

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
  <Meals :meals="meals"/>
</template>

<style scoped>

</style>