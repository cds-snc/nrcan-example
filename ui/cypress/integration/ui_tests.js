describe('NRCAN - example app', function() {
  describe('Basic Tests', function() {
    it('Should pass, we hope', function() {
      expect(true).to.equal(true)
    })

    it('Should visit the page', function() {
      cy.visit('/')
    })
  })
})
