<script setup>
import {RouterLink} from 'vue-router'
const {quizQuestionsLength, numberOfCorrectAnswers} = defineProps(['quizQuestionsLength', 'numberOfCorrectAnswers']);

</script>

<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{ numberOfCorrectAnswers }} / {{ quizQuestionsLength }}</h1>
    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0px;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>