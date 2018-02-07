import React from 'react'
import { shallow } from 'enzyme'
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
  describe('The rendered form', () => {
    let mockChange, mockSubmit, FormComponent
    beforeEach(() => {
      mockChange = jest.fn()
      mockSubmit = jest.fn()
      FormComponent = shallow(
        <Form
          onSubmit={mockSubmit}
          onChange={mockChange}
          uidValue="1234"
          pcodeValue="MMM MMM"
        />,
      )
    })

    it('Should accept four props', () => {
      const form = HomeComponent.find(Form)
      expect(Object.keys(form.props()).length).toBe(4)
    })
    it('Should call the onSubmit function when clicked', () => {
      FormComponent.find('form').simulate('submit')
      expect(mockSubmit.mock.calls.length).toBe(1)
    })
    it('Should call onChange with both inputs', () => {
      const uidInput = FormComponent.find('[name="UID"]')
      uidInput.simulate('change')
      const pcodeInput = FormComponent.find('[name="PCODE"]')
      pcodeInput.simulate('change')
      expect(mockChange.mock.calls.length).toBe(2)
    })
  })
})
