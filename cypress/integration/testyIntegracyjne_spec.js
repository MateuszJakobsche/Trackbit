describe('selecting', () => {
  
    beforeEach(() => {
  
      cy.visit('http://127.0.0.1:5500/')
  
    })
  
      it('clicks on the data cell', () => {
        cy.get('.c-cal__cel')
          .first()
          .next().next().next().next().next().next()
          .click()
  
        cy.should('have.class','c-cal__cel isSelected')
      });
  
})