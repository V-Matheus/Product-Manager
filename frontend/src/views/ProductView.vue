<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import Button from '@/components/Button.vue'
import { createProduct, deleteProduct, getProductById, updateProduct } from '../services/products'
import { z } from 'zod'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { onMounted, ref } from 'vue'
import type { Product } from '../services/types'
import { Field } from 'vee-validate'
import Modal from '@/components/modal.vue'

const router = useRouter()
const route = useRoute()
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const productById = ref<Product>({
  name: '',
  price: 0,
  stock: 0,
  type: '',
})
const showDeleteModal = ref(false)

const productSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  price: z.preprocess((val) => Number(val), z.number().min(1, 'Valor mínimo é de 1')),
  stock: z.preprocess((val) => Number(val), z.number().min(1, 'Estoque mínimo é de 1')),
  type: z.string().min(1, 'Tipo obrigatório'),
})

const { handleSubmit, setValues } = useForm({
  validationSchema: toTypedSchema(productSchema),
  initialValues: {
    name: '',
    price: 0,
    stock: 0,
    type: '',
  },
})

const onSubmit = handleSubmit(async (formData) => {
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
})

function goToHome() {
  router.push(`/`)
}

onMounted(async () => {
  if (id) {
    try {
      const response = await getProductById(id)
      setValues({
        name: response.name ?? '',
        price: response.price ?? 0,
        stock: response.stock ?? 0,
        type: response.type ?? '',
      })
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

    <form :onSubmit="onSubmit">
      <Field name="name" v-slot="{ field, errorMessage }">
        <Input v-bind="field" label="Nome" placeholder="Digite o nome" :error="errorMessage" />
      </Field>

      <Field name="price" v-slot="{ field, errorMessage }">
        <Input
          v-bind="field"
          type="number"
          min="0"
          label="Price"
          placeholder="Enter Price"
          :error="errorMessage"
        />
      </Field>

      <Field name="stock" v-slot="{ field, errorMessage }">
        <Input
          v-bind="field"
          type="number"
          min="0"
          label="Stock"
          placeholder="Enter Price"
          :error="errorMessage"
        />
      </Field>

      <Field name="type" v-slot="{ field, errorMessage }">
        <Select
          label="Type"
          :options="['Finished Product', 'Raw Material', 'Component']"
          v-bind="field"
          :error="errorMessage"
        />
      </Field>

      <div class="actions">
        <Button
          v-if="id"
          type="button"
          @click="showDeleteModal = true"
          variant="danger"
          value="Delete Product"
        />
        <Button @click="goToHome()" variant="secondary" value="Back to home" />
        <Button type="submit" variant="primary" :value="id ? 'Edit' : 'Add Product'" />
      </div>
    </form>
  </main>

  <Modal
    :open="showDeleteModal"
    confirmText="Excluir"
    cancelText="Cancelar"
    @confirm="showDeleteModal = false; onDelete()"
    @cancel="showDeleteModal = false"
  />
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
