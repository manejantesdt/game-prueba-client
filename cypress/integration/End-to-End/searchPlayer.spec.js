describe('Search player', () => {
    it('usuario puede buscar a jugador', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox').type('950')
      cy.findByRole('button', {name: /buscar jugador/i}).click()
      cy.findByRole('heading', {  name: /gustavo/i}).should('be.visible')
      cy.findByRole('link', {  name: /volver/i}).click()
    });
    it('si no se encuentra que emita la alerta correspondiente', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox').type('fkhgdkjfgh')
      cy.findByRole('button', {name: /buscar jugador/i}).click()
      cy.findByRole('heading', {  name: /\.\.\.descargando búsqueda/i}).contains("descargando búsqueda").should('be.visible')
    });
});