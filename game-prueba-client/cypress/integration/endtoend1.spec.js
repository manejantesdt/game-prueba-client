// describe('payment', () => {
//     it('user can make payment', () => {
//         //  login
//         cy.visit('/');
//         cy.findByRole('textbox', { name: /username/i }).type('johndoe');
//         cy.findByLabelText(/password/i).type('s3cret');
//         cy.findByRole('checkbox', { name: /remember me/i }).check();
//         cy.findByRole('button', { name: /sign in/i }).click();

//         // check account balance
//         let oldBalance;
//         cy.get('[data-test=sidenav-user-balance]').then($balance => oldBalance = $balance.text());

//         // click on new button
//         cy.findByRole('button', { name: /new/i }).click();

//         // search for user
//         cy.findByRole('textbox').type('devon becker');
//         cy.findByText(/devon becker/i).click();

//         // add amount and note and click pay
//         const paymentAmount = "5.00";
//         cy.findByPlaceholderText(/amount/i).type(paymentAmount);
//         const note = uuidv4();
//         cy.findByPlaceholderText(/add a note/i).type(note);
//         cy.findByRole('button', { name: /pay/i }).click();

//         // return to transactions
//         cy.findByRole('button', { name: /return to transactions/i }).click();

//         // go to personal payments
//         cy.findByRole('tab', { name: /mine/i }).click();

//         // click on payment
//         cy.findByText(note).click({ force: true });

//         // verify if payment was made
//         cy.findByText(`-$${paymentAmount}`).should('be.visible');
//         cy.findByText(note).should('be.visible');

//         // verify if payment amount was deducted
//         cy.get('[data-test=sidenav-user-balance]').then($balance => {
//             const convertedOldBalance = parseFloat(oldBalance.replace(/\$|,/g, ""));
//             const convertedNewBalance = parseFloat($balance.text().replace(/\$|,/g, ""));
//             expect(convertedOldBalance - convertedNewBalance).to.equal(parseFloat(paymentAmount));
//         });
//     });
// });

describe('Search player', () => {
    it('usuario puede buscar a jugador', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox').type('juanca')
      cy.findByRole('button', {name: /buscar jugador/i}).click()
      cy.findByRole('heading', {  name: /juanca/i}).should('be.visible')
      cy.findByRole('link', {  name: /volver/i}).click()
    });
    it('si no se encuentra que emita la alerta correspondiente', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox').type('fkhgdkjfgh')
      cy.findByRole('button', {name: /buscar jugador/i}).click()
      cy.findByRole('heading', {  name: /\.\.\.descargando búsqueda/i}).contains("descargando búsqueda").should('be.visible')
      cy.visit('http://localhost:3000/');
      //sino lo encuentra verificar la ventana de no encontrado
    });
});

describe('Create player', () => {
    it('usuario puede crear satisfactoriamente un jugador', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('link', { name: /crear jugador/i}).click()
      //selecciona los inputs 
      
      // cy.findByLabelText(/password/i).type('s3cret');
      cy.findByRole('combobox').select('Avatar 5')
      // cy.findByRole('button', { name: /crear jugador/i}).click()
       // encontrar el usuario buscado
    });
});

describe('Edit player', () => {
    it('usuario puede editar la información de un jugador satisfactoriamente', () => {
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox').type('juanca')
      cy.findByRole('button', {name: /buscar jugador/i}).click()
      cy.findByRole('heading', {  name: /juanca/i}).should('be.visible').click()
      cy.findByText(/juanca/i).should('be.visible')
      cy.findByRole('button', {  name: /editar/i}).click()
      cy.findByRole('spinbutton').type('12345')
      cy.findByRole('button', {  name: /cambiar/i}).click()
      cy.visit('http://localhost:3000/id/3002')
        
      //verificar cambio de ranking 
       
    });
});

// describe('Eliminar usuario', () => {
//   it('usuario puede eliminar un jugador satisfactoriamente', () => {
//     //visitar usuario creado
//     cy.visit('http://localhost:3000/id/3002')
//     //click a la x eliminar  
//     cy.findByRole('button', {  name: /x/i}).click()
//     //verifica que el jugador se eliminó buscando por id 
//     cy.visit('http://localhost:3000/id/3002')
//     cy.findByText(/\.\.\.descargando\.\.\./i).contains('descargando')   
//   });
// });