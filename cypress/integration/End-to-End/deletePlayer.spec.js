describe('Eliminar usuario', () => {
  
    it('usuario puede borrar satisfactoriamente un jugador', () => {
        cy.visit('http://localhost:3000/');
        cy.findByRole('link', { name: /crear jugador/i}).click()
        cy.get('input[name="nickname"]').type('prueba5')
        cy.findByRole('combobox').select('Avatar 5')
        cy.findByRole('button', { name: /crear jugador/i}).click()
        cy.findByRole('button', {  name: /ok/i}).click()
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox').type('Prueba5000')
        cy.findByTestId('SearchIcon').click()
        cy.visit('http://localhost:3000/test/3008');
          cy.findByRole('button', {  name: /editar/i}).click()
          cy.findByRole('button', {  name: /x/i}).click()
          cy.findByRole('button', { name: /ok/i }).click()
          cy.visit('http://localhost:3000/id/3008')
          cy.findByText(/3008/i).contains(3008)
      
      });  
  });
