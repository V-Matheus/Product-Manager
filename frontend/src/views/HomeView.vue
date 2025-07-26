<script setup lang="ts">
import { CiSearch } from 'vue-icons-plus/ci'
import Button from '@/components/Button.vue'
import { onMounted, reactive } from 'vue'
import { Product } from '../services/types'
import { getProducts } from '../services/products'
import { useRouter } from 'vue-router'

const products = reactive<Product[]>([])
const router = useRouter()

onMounted(async () => {
  try {
    const response = await getProducts()
    products.push(...response)
  } catch (error) {
    console.error('Failed to load products:', error)
  }
})

function goToCreateProduct(id: string = '') {
  router.push(`/product/${id}`)
}

console.log('Products loaded:', products)
</script>

<template>
  <main>
    <h1>Products</h1>

    <label class="search-bar">
      <CiSearch />
      <input type="text" placeholder="Search products..." />
    </label>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="index"
          @click="goToCreateProduct(product.id)"
        >
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>R${{ product.price.toFixed(2) }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.type }}</td>
        </tr>
      </tbody>
    </table>
    <div class="actions">
      <Button @click="goToCreateProduct()" variant="primary" value="Add Product" />
    </div>
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

h1 {
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  color: #121417;
}

.search-bar {
  display: flex;
  cursor: text;
  gap: 0.5rem;
  background: #f0f2f5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.search-bar input {
  display: flex;
  flex: 1;
}

table {
  border: 1px solid #dbe0e6;
  border-radius: 8px;
}

td,
th {
  border-bottom: 1px solid #dbe0e6;
  padding: 0.75rem 1rem;
  text-align: start;
}

tbody tr:last-child td {
  border-bottom: none;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}
</style>
