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