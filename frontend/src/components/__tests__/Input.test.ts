import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../Input.vue'

describe('Component: Input', () => {
  it('renders label when passed', () => {
    const screen = mount(Input, {
      props: { label: 'Product Name' }
    })
    expect(screen.text()).toContain('Product Name')
  })

  it('renders placeholder when passed', () => {
    const screen = mount(Input, {
      props: { placeholder: 'Enter Name' }
    })
    const input = screen.find('input')
    expect(input.attributes('placeholder')).toBe('Enter Name')
  })

  it('binds value via modelValue', async () => {
    const screen = mount(Input, {
      props: { modelValue: 'Test' }
    })
    const input = screen.find('input')
    expect((input.element as HTMLInputElement).value).toBe('Test')
  })

  it('emits update:modelValue on input', async () => {
    const screen = mount(Input, {
      props: { modelValue: '' }
    })
    const input = screen.find('input')
    await input.setValue('New Value')
    expect(screen.emitted()['update:modelValue']).toBeTruthy()
    expect(screen.emitted()['update:modelValue']![0]).toEqual(['New Value'])
  })

  it('sets input type when passed', () => {
    const screen = mount(Input, {
      props: { type: 'number' }
    })
    const input = screen.find('input')
    expect(input.attributes('type')).toBe('number')
  })
})