<script setup lang="ts">
defineProps<{
  value?: string
  variant?: 'primary' | 'secondary' | 'danger'
}>()

function getClass(variant?: string) {
  switch (variant) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'secondary'
    case 'danger':
      return 'danger'
    default:
      return 'primary'
  }
}
</script>

<template>
  <button :class="getClass(variant)" @click="$emit('click')">
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

.danger {
  display: flex;
  padding: 0.625rem 1rem;
  background: #d32f2f;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  border: none;
}
</style>
