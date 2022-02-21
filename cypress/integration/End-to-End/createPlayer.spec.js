describe('Create player', () => {
    it('usuario puede crear satisfactoriamente un jugador', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('link', { name: /crear jugador/i}).click()
      cy.get('input[name="nickname"]').type('Prueba')
      cy.findByRole('combobox').select('Avatar 5')
      cy.findByRole('button', { name: /crear jugador/i}).click()
      cy.findByRole('button', {  name: /ok/i}).click()
            
    });
    // it('buscar usuario creado', () => {
    //     cy.visit('http://localhost:3000/');
    //     cy.findByRole('textbox').type('prueba')
    //     cy.findByTestId('SearchIcon').click()
    //     cy.findByText(/ranking: 2374/i).should('be.visible')
        
    //   });
});