describe('selecting', () => {
  
    beforeEach(() => {
  
      cy.visit('https://trackbitapp.netlify.app/')
  
    })
  
      it('clicks on the data cell', () => {
        cy.get('.c-cal__cel')
          .first()
          .next().next().next().next().next().next()
          .click()
  
        cy.should('have.class','c-cal__cel isSelected')
      });

      it('check if today btn works', () => {

        cy.get('#next').click().click()
  
        cy.get('.c-today__btn').click()
  
        let date = new Date();
  
        cy.get(`[data-month="${date.getMonth()+1}"]`).should('be.visible')
      });
      it('verifies alert and its text content', function(){
      
        cy.get('.c-cal__cel')
        .first()
        .next().next().next().next().next().next()
        .click()
  
        const stub = cy.stub()  
          cy.on ('window:alert', stub)
          cy
          .get('.reports').first().click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith("Days checked during this month: " + 1 + "\nIt equals to ~" + 4 + "% of the month!\n\nkeep going :>")      
          });
       
        });
    })