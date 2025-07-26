<script setup lang="ts">
defineProps<{
  label?: string
  placeholder?: string
  modelValue?: string | number
  type?: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <label>
    {{ label }}

    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      min="0"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
</style>
