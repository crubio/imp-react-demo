import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/App'
import MainContainer from '../containers/MainContainer'
import ConfigList from '../components/ConfigList'

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
    ReactDOM.render(<ConfigList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

