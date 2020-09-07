import Layout from '../Layout'
import { shallow } from 'enzyme'

describe('organisms/Layout', () => {
  it('with all value: pageTitle, description and children', async () => {
    const wrapper = shallow(
      <Layout pageTitle='my-title' description='my-description'>
        <p id='children'>Hi this is a children</p>
      </Layout>
    )
    expect(wrapper.find('#children')).toHaveLength(1)
    expect(wrapper.find('title').html()).toContain('my-title')
    expect(wrapper.find({ name: 'description', description: 'my-description' }))
      .toHaveLength(1)
  })
})
