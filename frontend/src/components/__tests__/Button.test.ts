import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Component: Button', () => {
  it('renders value when passed', () => {
    const screen = mount(Button, {
      props: { value: 'Click me' }
    })
    expect(screen.text()).toContain('Click me')
  })

  it('applies primary class by default', () => {
    const screen = mount(Button, {
      props: { value: 'Primary', variant: 'primary' }
    })
    const button = screen.find('button')
    expect(button.classes()).toContain('primary')
  })

  it('applies secondary class when variant is secondary', () => {
    const screen = mount(Button, {
      props: { value: 'Secondary', variant: 'secondary' }
    })
    const button = screen.find('button')
    expect(button.classes()).toContain('secondary')
  })

  it('emits click event when clicked', async () => {
    const screen = mount(Button, {
      props: { value: 'Click' }
    })
    await screen.find('button').trigger('click')
    expect(screen.emitted('click')).toBeTruthy()
  })
})