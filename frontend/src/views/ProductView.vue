<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import Button from '@/components/Button.vue'
import { createProduct, deleteProduct, getProductById, updateProduct } from '../services/products'
import { z } from 'zod'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { onMounted, ref } from 'vue'
import { Product } from '../services/types'

const router = useRouter()
const route = useRoute()
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const productById = ref<Product>({
  name: '',
  price: 0,
  stock: 0,
  type: '',
})
const submitted = ref(false)

const productSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  price: z.preprocess((val) => Number(val), z.number().min(1, 'Valor mínimo é de 1')),
  stock: z.preprocess((val) => Number(val), z.number().min(1, 'Estoque mínimo é de 1')),
  type: z.string().min(1, 'Tipo obrigatório'),
})

const { handleSubmit, values } = useForm({
  validationSchema: toTypedSchema(productSchema),
  initialValues: {
    name: '',
    price: 0,
    stock: 0,
    type: '',
  },
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: price, errorMessage: priceError } = useField('price')
const { value: stock, errorMessage: stockError } = useField('stock')
const { value: type, errorMessage: typeError } = useField('type')

const onSubmit = handleSubmit(
  async (formData) => {
    submitted.value = true
    try {
      if (id) {
        await updateProduct(id, formData)
        router.push('/')
        return
      }

      await createProduct(formData)
      router.push('/')
    } catch (error) {
      console.error('Error create product:', error)
    }
  },
  (validationErrors) => {
    submitted.value = true
  },
)

function goToHome() {
  router.push(`/`)
}

onMounted(async () => {
  if (id) {
    try {
      const response = await getProductById(id)
      productById.value = response
      name.value = response.name
      price.value = response.price
      stock.value = response.stock
      type.value = response.type
      console.log('Product loaded:', productById.value)
    } catch (error) {
      console.error('Failed to load product:', error)
    }
  }
})

async function onDelete() {
  if (!id) return
  try {
    await deleteProduct(id)
    router.push('/')
  } catch (error) {
    console.error('Error deleting product:', error)
  }
}
</script>

<template>
  <main>
    <section class="title">
      <h1>{{ id ? 'Edit Product' : 'Add New Product' }}</h1>
      <p>Modify the details of the selected product.</p>
    </section>

    <form @submit.prevent="onSubmit">
      <Input type="text" label="Product Name" placeholder="Enter Name" v-model="name" />
      <span v-if="submitted && nameError" class="error">{{ nameError }}</span>

      <Input type="number" min="0" label="Price" placeholder="Enter Price" v-model="price" />
      <span v-if="submitted && priceError" class="error">{{ priceError }}</span>

      <Input type="number" min="0" label="Stock" placeholder="Enter Stock" v-model="stock" />
      <span v-if="submitted && stockError" class="error">{{ stockError }}</span>

      <Select
        label="Type"
        :options="['Finished Product', 'Raw Material', 'Component']"
        v-model="type"
      />
      <span v-if="submitted && typeError" class="error">{{ typeError }}</span>

      <div class="actions">
        <Button v-if="id" @click="onDelete" variant="danger" value="Delete Product" />
        <Button @click="goToHome()" variant="secondary" value="Back to home"></Button>
        <Button type="submit" variant="primary" value="Add Product"></Button>
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

.error {
  color: #d32f2f;
  font-size: 12px;
  margin-bottom: 0.5rem;
  display: block;
}
</style>
