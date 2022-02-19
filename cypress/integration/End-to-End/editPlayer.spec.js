describe('Edit player', () => {
        it('usuario puede editar la información de un jugador satisfactoriamente', () => {
          cy.visit('http://localhost:3000/');
          cy.findByRole('textbox').type('nath')
          // cy.findByRole('button', {name: /buscar jugador/i}).click()
          cy.findByTestId('SearchIcon').click()
          cy.findByText(/ranking: 783/i).should('be.visible').click()
        //  cy.findByRole('button', {  name: /editar/i}).click()
        //   cy.findByRole('spinbutton').type('12345')
        //   cy.findByRole('button', {  name: /cambiar/i}).click()
          // cy.visit('http://localhost:3000/id/3002')
            
          //verificar cambio de ranking 
           
        });
    });