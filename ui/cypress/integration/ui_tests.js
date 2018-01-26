describe('NRCAN - example app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Focus', () => {
    it('Focuses input on load', () => {
      cy.focused().should('have.class', 'UID-input')
    })
  })

  describe('Input form', () => {
    beforeEach(() => {
      const UID = 12149
      const PCode = 'M6G 2R3'
      const expectedYear = '1894'

      cy.get('input[name=UID]').type(UID)

      cy.get('input[name=PCode]').type(PCode)

      cy.get('form').submit()
    })

    it('Fetches evaluation data for given UID & Postal Code', () => {
      cy.get('.yearBuilt').contains('1894')
    })

    it('Resets data when reset button is clicked', () => {
      cy.get('button').click()

      cy.focused().should('have.class', 'UID-input')
    })
  })
})
