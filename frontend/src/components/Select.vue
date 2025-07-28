<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label?: string
  options?: Array<string>
  modelValue?: string | number
  value?: string | number
  error?: string
}>()
const emit = defineEmits(['update:modelValue', 'update:value'])

const currentValue = computed({
  get: () => props.value ?? props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
    emit('update:value', val)
  },
})
</script>

<template>
  <label>
    {{ label }}
    <select v-model="currentValue">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
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

input,
select {
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

input:focus,
select:focus {
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
