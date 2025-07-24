<script setup lang="ts">
defineProps<{
  value?: string
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button :class="variant === 'primary' ? 'primary' : 'secondary'" @click="$emit('click')">
    {{ value }}
  </button>
</template>

<style scoped>
.primary {
  display: flex;
  padding: 0.625rem 1rem;

  background: #248cf2;
  border-radius: 8px;

  font-weight: 700;
  font-size: 14px;
  line-height: 21px;

  color: #ffffff;
}

.secondary {
  display: flex;
  padding: 0.625rem 1rem;
  background: #ffffff;
  border: 2px solid #248cf2;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #248cf2;
}
</style>
