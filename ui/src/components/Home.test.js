import React from 'react'
import { shallow, mount } from 'enzyme'
import { Home } from './Home'

//boilerplate
describe('Home Component', () => {
  //Div is always rendered
  it('Should always render a div', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('div').length).toBeGreaterThan(0)
  })
  //Div contains everything else that is rendered
  it('Should be contained within a div', () => {})
  //A form is always rendered
  //Form accepts 4 props
  //Form UID value is equal to prop uidValue
  //Form PCODE value is equal to prop pcodeValue
  //Clicking the submit button calls onSubmit function
  //Typing input calls the onChange function
})
