describe('Search player', () => {
    it('usuario puede buscar a jugador', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox').type('950')
      cy.findByTestId('SearchIcon').click()
      cy.findByText(/id: 950/i).should('be.visible')
     
    });
    it('si no se encuentra que emita la alerta correspondiente', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox').type('fkhgdkjfgh')
      cy.findByTestId('SearchIcon').click()
      cy.wait(6000)
      cy.findByRole('heading', {  name: /no se encontraron jugadores/i}).should('be.visible')
      cy.findByRole('link', {  name: /volver al salón de la fama/i}).click()
      cy.findByText(/id: 4/i).should('be.visible')
     
    });
});