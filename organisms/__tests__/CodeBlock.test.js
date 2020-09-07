import CodeBlock from '../CodeBlock'
import { shallow } from 'enzyme'

describe('CodeBlock', () => {
  it('should render', () => {
    const wrapper = shallow(
      <CodeBlock value='console.log()' language='js' />
    )
    expect(wrapper.find('SyntaxHighlighter')).toHaveLength(1)
  })
})
