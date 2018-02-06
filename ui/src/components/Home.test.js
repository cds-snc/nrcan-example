import React from 'react'
import { shallow, mount } from 'enzyme'
import { Home } from './Home'
import Form from './Form'

describe('Home Component', () => {
  let HomeComponent = shallow(<Home />)
  it('Should always render a div', () => {
    expect(HomeComponent.find('div').length).toBeGreaterThan(0)
  })
  describe('The rendered div', () => {
    it('Should contain everything else that gets rendered', () => {
      const divs = HomeComponent.find('div')
      const wrappingDiv = divs.first()

      expect(wrappingDiv.children()).toEqual(HomeComponent.children())
    })
  })
  it('Should always render a form', () => {
    expect(HomeComponent.find('Form').length).toEqual(1)
  })
  describe('Rendered form', () => {
    it('Should accept four props', () => {
      const form = HomeComponent.find(Form)
      expect(Object.keys(form.props()).length).toBe(4)
    })
  })
  //Form accepts 4 props
  //Clicking the submit button calls onSubmit function
  //Typing input calls the correct onChange function
})
