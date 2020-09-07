import CodeBlock from '../CodeBlock'
import { mount } from 'enzyme'

describe('CodeBlock', () => {
  it('should render', () => {
    const wrapper = mount(
      <CodeBlock value='console.log()' language='js' />
    )
    expect(wrapper.find('pre')).toHaveLength(1)
  })
})
