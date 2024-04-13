<script setup>
defineProps(
    {
      href: String
    }
)
</script>

<template>
  <a :href="href" target="_blank"
     class="px-3 py-2 rounded border-2 border-orange-600 bg-orange-500 hover:bg-orange-600 text-white transition-colors">
    <slot>Youtube</slot>
  </a>
</template>

<style scoped>

</style>