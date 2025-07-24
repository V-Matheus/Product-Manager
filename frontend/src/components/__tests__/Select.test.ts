import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '../Select.vue'

describe('Component: Select', () => {
  it('renders label when passed', () => {
    const screen = mount(Select, {
      props: { label: 'Type', options: ['A', 'B'] }
    })
    expect(screen.text()).toContain('Type')
  })

  it('renders all options passed', () => {
    const options = ['Option 1', 'Option 2', 'Option 3']
    const screen = mount(Select, {
      props: { options }
    })
    const optionElements = screen.findAll('option')
    expect(optionElements).toHaveLength(options.length)
    options.forEach((option, idx) => {
      expect(optionElements[idx].text()).toBe(option)
      expect(optionElements[idx].attributes('value')).toBe(option)
    })
  })

  it('binds value via modelValue', () => {
    const screen = mount(Select, {
      props: { options: ['A', 'B'], modelValue: 'B' }
    })
    const select = screen.find('select')
    expect((select.element as HTMLSelectElement).value).toBe('B')
  })

  it('emits update:modelValue on change', async () => {
    const screen = mount(Select, {
      props: { options: ['A', 'B'], modelValue: 'A' }
    })
    const select = screen.find('select')
    await select.setValue('B')
    expect(screen.emitted()['update:modelValue']).toBeTruthy()
    expect(screen.emitted()['update:modelValue']![0]).toEqual(['B'])
  })
})