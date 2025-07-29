<script setup lang="ts">
import Button from './Button.vue'

defineProps<{ open: boolean }>()
defineEmits(['confirm', 'cancel'])
</script>

<template>
  <div v-if="open" class="modal-backdrop">
    <div class="modal">
      <h2>Confirmar exclusão</h2>
      <p>Tem certeza que deseja excluir este produto?</p>
      <div class="modal-actions">
        <Button :value="'Cancelar'" variant="secondary" @click="$emit('cancel')" />
        <Button :value="'Excluir'" variant="danger" @click="$emit('confirm')" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
.danger {
  background: #d32f2f;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

h2, p {
  color: #121417;
}
</style>
