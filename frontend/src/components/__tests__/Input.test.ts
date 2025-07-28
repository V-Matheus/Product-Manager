import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../Input.vue'

describe('Component: Input', () => {
  it('renders label when passed', () => {
    const screen = mount(Input, {
      props: { name: 'productName', label: 'Product Name' }
    })
    expect(screen.text()).toContain('Product Name')
  })

  it('renders placeholder when passed', () => {
    const screen = mount(Input, {
      props: { name: 'productName', placeholder: 'Enter Name' }
    })
    const input = screen.find('input')
    expect(input.attributes('placeholder')).toBe('Enter Name')
  })

  it('sets input type when passed', () => {
    const screen = mount(Input, {
      props: { name: 'price', type: 'number' }
    })
    const input = screen.find('input')
    expect(input.attributes('type')).toBe('number')
  })

  it('renders error message when passed', () => {
    const screen = mount(Input, {
      props: { name: 'productName', error: 'Campo obrigatório' }
    })
    expect(screen.text()).toContain('Campo obrigatório')
  })

  it('passes value via $attrs', async () => {
    const screen = mount(Input, {
      props: { name: 'productName' },
      attrs: { value: 'Test' }
    })
    const input = screen.find('input')
    expect((input.element as HTMLInputElement).value).toBe('Test')
  })
})