<script setup>
import {computed, onMounted, ref} from "vue";
import store from "@/store/index.js";
import {useRoute} from "vue-router";
import Meals from "@/components/Meals.vue";

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)

function searchMeal() {
  if(keyword.value)
  {
    store.dispatch('searchMeals', keyword.value)
  }
  store.commit('setSearchedMeals', [])
}

onMounted(() => {
  keyword.value = route.params.name
  if(keyword.value){
    searchMeal()
  }
})

</script>

<template>
  <div class="p-8 pb-0">
    <input type="text" v-model="keyword" @change="searchMeal" class="w-full bg-white rounded border-2 border-gray-200"
           placeholder="Search for meals..">
  </div>
  <Meals :meals="meals"/>
</template>

<style scoped>

</style>