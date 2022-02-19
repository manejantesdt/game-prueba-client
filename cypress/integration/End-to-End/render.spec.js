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


describe('Renderizado de componentes', () => {
  it('Render home', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('link', {  name: /crear jugador/i}).should('be.visible')
    cy.findByRole('link', {  name: /contáctanos/i}).should('be.visible')
    cy.findByRole('img').should('be.visible')
    cy.findByRole('button', {  name: /log in/i}).should('be.visible')
  });
  it('Render about', () => {
    cy.visit('http://localhost:3000/about');
    cy.findByText(  /creemos que una de las mejores maneras de aprender es jugando! la mayoría no puede aprender de un libro\. pero sabemos que si jugamos a reciclar, terminaremos aprendiendo y aplicándolo en la vida real\./i  ).should('be.visible')
    cy.findByRole('link', {  name: /contáctanos/i}).should('be.visible')
  });
  it('Render create', () => {
    cy.visit('http://localhost:3000/create');
    cy.findByRole('combobox').should('be.visible')
    cy.findByRole('link', {  name: /volver/i}).should('be.visible')
  });
});

