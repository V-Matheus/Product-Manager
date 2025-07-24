<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import Input from '@/components/Input.vue'

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

      <label>
        Type

        <select v-model="formData.type">
          <option value="finished-product">Finished Product</option>
          <option value="raw-material">Raw Material</option>
          <option value="component">Component</option>
          <option value="consumable">Consumable</option>
          <option value="tool">Tool</option>
          <option value="packaging">Packaging</option>
          <option value="service">Service</option>
          <option value="spare-part">Spare Part</option>
          <option value="accessory">Accessory</option>
          <option value="semi-finished-product">Semi-finished Product</option>
        </select>
      </label>
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
