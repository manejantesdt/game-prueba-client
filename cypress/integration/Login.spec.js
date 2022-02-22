describe('access secret admin functionality', () => {
    it('should be able to navigate to', () => {
      cy.visitHome().loginAsAdmin()
      
   });
  });