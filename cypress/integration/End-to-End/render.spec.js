describe('Renderizado de componentes', () => {
  it('Render home', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('link', {  name: /crear jugador/i}).should('be.visible')
    cy.findByRole('button', {  name: /contáctanos/i}).should('be.visible')
    cy.findByRole('img').should('be.visible')
    cy.findByRole('button', {  name: /log in/i}).should('be.visible')
  });
  it('Render about', () => {
    cy.visit('http://localhost:3000/about');
    cy.findByText(  /cada vez más personas en el mundo son conscientes de la necesidad de cuidar el medio\-ambiente\. sin embargo, cuidarlo requiere, para la mayoría de nosotros, desarrollar nuevos hábitos, por ejemplo separar los residuos, clasificarlos y ponerlos en los recipientes adecuados para que puedan ser reciclados\./i  ).should('be.visible')
    cy.findByRole('button', {  name: /contáctanos/i}).should('be.visible')
    cy.findByRole('img', {  name: /marisa lia pascal/i}).should('be.visible')
    cy.findByText(/marisa lia pascal/i).should('be.visible')
  });
  it('Render create', () => {
    cy.visit('http://localhost:3000/create');
    cy.findByRole('combobox').should('be.visible')
    cy.findByRole('link', {  name: /volver/i}).should('be.visible')
  });
  it('Detail Player', () => {
    cy.visit('http://localhost:3000/id/1');
    cy.findByText(/116508/i).should('be.visible')
    
  });
});

