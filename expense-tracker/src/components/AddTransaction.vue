<script setup>
import {ref} from "vue";

let text = ref('');
let amount = ref('');
const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    alert('Boat fields must be filled');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value)
  }

  emit('transactionSubmitted', transactionData);
}
</script>

<template>
  <h3>Add New Transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text...">
    </div>
    <div class="form-control">
      <label for="amount">Amount</label>
      <input type="text" v-model="amount" id="amount" placeholder="Enter Amount...">
    </div>
    <button class="btn">Add Transaction</button>
  </form>
</template>

<style scoped>

</style>