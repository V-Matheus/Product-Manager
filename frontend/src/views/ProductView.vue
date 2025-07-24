<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import Button from '@/components/Button.vue'

const route = useRoute()
const id = route.params.id

const formData = reactive({
  name: '',
  price: 0,
  stock: 0,
  type: '',
})

function handleSubmit() {
  console.log('Form submitted for product ID:', id)
}
</script>

<template>
  <main>
    <section class="title">
      <h1>Add New Product</h1>
      <p>Modify the details of the selected product.</p>
    </section>

    <form action="">
      <Input type="text" label="Product Name" placeholder="Enter Name" v-model="formData.name" />

      <Input
        type="number"
        min="0"
        label="Price"
        placeholder="Enter Price"
        v-model="formData.price"
      />

      <Input
        type="number"
        min="0"
        label="Stock"
        placeholder="Enter Stock"
        v-model="formData.stock"
      />

      <Select
        label="Type"
        :options="['Finished Product', 'Raw Material', 'Component']"
        v-model="formData.type"
      />

      <div class="actions">
        <Button variant="secondary" value="Back to home"></Button>
        <Button variant="primary" value="Add Product"></Button>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-content: end;
  gap: 1rem;
  flex: 1;
  padding: 2rem 10rem;
  background-color: #ffffff;
  color: #121417;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h1 {
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  color: #121417;
}

p {
  font-family: 'Inter' sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #61758a;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}
</style>
