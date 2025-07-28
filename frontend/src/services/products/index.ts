import { api } from '../api'
import type { Product } from '../types'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error) {
    toast.error('Error get products')
    console.error('Error fetching products:', error)
    throw error
  }
}

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    toast.error('Error get product')
    console.error('Error fetching products:', error)
    throw error
  }
}

export const createProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await api.post('/products', product)
    toast.success('Product created successfully!')
    return response.data
  } catch (error) {
    toast.error('Error creating product')
    console.error('Error fetching products:', error)
    throw error
  }
}

export const updateProduct = async (id: string, product: Product): Promise<Product> => {
  try {
    const response = await api.patch(`/products/${id}`, product)
    toast.success('Product updated successfully!')
    return response.data
  } catch (error) {
    toast.error('Error edit product')
    console.error('Error fetching products:', error)
    throw error
  }
}

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await api.delete(`/products/${id}`)
    toast.success('Product deleted successfully!')
  } catch (error) {
    toast.error('Error deleted product')
    console.error('Error fetching products:', error)
    throw error
  }
}
