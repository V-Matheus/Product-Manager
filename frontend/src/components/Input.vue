<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
  label?: string
  placeholder?: string
  type?: string
  error?: string
}>()
</script>

<template>
  <label>
    {{ label }}
    <input v-bind="$attrs" :type="type" :placeholder="placeholder" min="0" />
  </label>
  <span v-if="error" class="error">{{ error }}</span>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-family: 'Inter' sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #121417;
}
input {
  background: #ffffff;
  border: 1px solid #dbe0e6;
  border-radius: 8px;
  padding: 0.5rem;
  font-family: 'Inter' sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #61758a;
}
input:focus {
  outline: none;
  border: 2px solid #121417;
}

.error {
  color: #d32f2f;
  font-size: 12px;
  margin-bottom: 0.5rem;
  display: block;
}
</style>
