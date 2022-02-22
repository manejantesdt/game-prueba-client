describe('Create player', () => {
    it('usuario puede crear satisfactoriamente un jugador', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('link', { name: /crear jugador/i}).click()
      cy.get('input[name="nickname"]').type('pruebacreate')
      cy.findByRole('combobox').select('Avatar 5')
      cy.findByRole('button', { name: /crear jugador/i}).click()
      cy.findByRole('button', {  name: /ok/i}).click()
            
    });

});