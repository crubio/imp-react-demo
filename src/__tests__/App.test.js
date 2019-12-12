import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../containers/App'
import MainContainer from '../containers/MainContainer'
import ConfigList from '../components/ConfigList'

Enzyme.configure({ adapter: new Adapter() })

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('renders main container without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})

/** Test block to contain all this components test */
describe('ConfigList tests:', () => {

  test('renders ConfigList without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ConfigList title="running tests" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('renders with no data', () => {
    const wrapper = shallow(<ConfigList title="" />)
    expect(wrapper.exists()).toBe(true)
  })
})

