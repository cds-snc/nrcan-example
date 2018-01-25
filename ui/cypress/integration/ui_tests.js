describe('NRCAN - example app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Basic Test', () => {
    it('Asserts true', () => {
      expect(true).to.equal(true)
    })
  })

  describe('Input form', () => {
    it('Focuses input on load', () => {
      cy.focused().should('have.class', 'UID-input')
    })
  })
})
