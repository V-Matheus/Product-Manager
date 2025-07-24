<script setup lang="ts">
defineProps<{
  label?: string
  options?: Array<string>
  modelValue?: string | number
}>()
</script>

<template>
  <label>
    {{ label }}

    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
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
</style>
