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
  const response = await api.get(`/${id}`)
  return response.data
}

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await api.post('/', product)
  return response.data
}

export const updateProduct = async (id: string, product: Product): Promise<Product> => {
  const response = await api.put(`/${id}`, product)
  return response.data
}

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/${id}`)
}
