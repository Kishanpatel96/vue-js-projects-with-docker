<script setup>
import {ref} from 'vue';

const showModel = ref(false)
const newNote = ref('')
const errorMessage = ref('')
const notes = ref([])

const adNote = () => {
  if (newNote.value.length < 10) {
    return errorMessage.value = 'Your note has too be more than 10 characters'
  }

  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: "hsl(" + Math.random() * 360 + ", 100%, 75%"
  });

  showModel.value = false;
  newNote.value = '';
  errorMessage.value = '';
}

</script>

<template>
  <main>
    <div class="overlay" v-if="showModel">
      <div class="model">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="adNote">Add Note</button>
        <button @click="showModel = !showModel" class="close-btn">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModel = !showModel">+</button>
      </header>
      <div class="cards-container">
        <div class="card" v-for="(note, key) in notes" :key="key" :style="{backgroundColor: note.backgroundColor}">
          <p class="main-text">{{ note.text }} </p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-height: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 255px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}
.date {
  font-size: 12.5px;
  font-weight: bold;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.model {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.model button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}
.model .close-btn {
  background-color: red;
  margin-top: 7px;
}
.model p {
  color: red;
}
</style>
