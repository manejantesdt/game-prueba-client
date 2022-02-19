describe('access secret admin functionality', () => {
    it('should be able to navigate to', () => {
      cy.visitHome().loginAsAdmin()
      cy.findByRole('textbox').type('nath')
      cy.findByRole('button', {name: /buscar jugador/i}).click()
      cy.findByText(/ranking: 783/i).should('be.visible').click()
        // .get('[href="/secret-adminny-stuff"]') // This link should only be visible to admins
        // .click()
        // .url()
        // .should('contain', 'secret-adminny-stuff/'); // non-admins should be redirected away from this url
    });
  });