<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2>Product Manager</h2>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 1.25rem 2.5rem;
  line-height: 1.5;
  max-height: 100vh;
  border-bottom: 2px solid #e5e8eb;
  background: #ffffff;
  width: 100%;
}

header h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  color: #121417;
}
</style>
