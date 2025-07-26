import { api } from '../api'
import type { Product } from '../types'

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const createProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await api.post('/products', product)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const updateProduct = async (id: string, product: Product): Promise<Product> => {
  try {
    const response = await api.put(`/products/${id}`, product)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await api.delete(`/products/${id}`)
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
