<script setup>

import quizes from '../data/quizes.json'
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import {useRoute} from "vue-router";
import {ref, computed} from "vue";
import Result from "@/components/Result.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const currentQuestionIndex = ref(0)
const quiz = quizes.find(q => q.id === quizId)

const questionStatus = computed(() => `${currentQuestionIndex.value} / ${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)
const numberOfCorrectAnswers = ref(0)
const showResult = ref(false)

const onOptionSelected = (isCorrected) => {
  if(isCorrected){
    numberOfCorrectAnswers.value++
  }

  if ((quiz.questions.length - 1) === currentQuestionIndex.value) {
    showResult.value = true
  }

  currentQuestionIndex.value++
}
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
    <div>
      <Question v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected"/>

      <Result v-else :quizQuestionsLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" />
    </div>
  </div>
</template>

<style scoped>

</style>