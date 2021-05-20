import { shallowMount } from '@vue/test-utils'
import AboutIcon from '@/components/AboutIcon.vue'
import About from '@/components/About.vue'
import Award from '@/components/Award.vue'

describe('AboutIcon.vue', () => {
  it('Render AboutIcon props', () => {
    const icon = {
      link: 'test link',
      title: 'test title',
      icon_class: 'test class'
    }
    const wrapper = shallowMount(AboutIcon, {
      props: { icon }
    })
    const html = wrapper.html()
    expect(html).toContain(icon.link)
    expect(html).toContain(icon.title)
    expect(html).toContain(icon.icon_class)
  })
})

describe('About.vue', () => {
  it('Render About component', () => {
    const icon = {
      link: 'test link',
      title: 'test title',
      icon_class: 'test class'
    }
    const wrapper = shallowMount(About, {
      props: { icon, icon }
    })
    const html = wrapper.html()
    expect(html).toContain(AboutIcon)
  })
})

describe('Award.vue', () => {
  it('Render Award props', () => {
    const award = 'test award'
    const wrapper = shallowMount(Award, {
      props: { award }
    })
    const html = wrapper.html()
    expect(html).toContain(award)
  })
})
