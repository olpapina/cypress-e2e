describe('Our first suite', () => {

  describe('first test', () => {
    it('passes', () => {
      cy.visit('https://www.google.com/')
    })
  })


  describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.oz.by/')
      // 
    })
  })

  describe('first test', () => {
    it('passes', () => {
      cy.visit('https://www.amazon.com')
    })
  })

})