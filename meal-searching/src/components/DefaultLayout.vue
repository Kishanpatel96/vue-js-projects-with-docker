<script setup>

import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <navbar/>
  <main>
    <div class="max-w-[1200px]">
      <router-view/>
    </div>
  </main>
</template>

<style scoped>

</style>