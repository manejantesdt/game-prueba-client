import { About } from '../components/About'
import React from 'react'
import { mount } from '@cypress/react'
import {  Routes, Route} from "react-router-dom";


describe('access secret admin functionality', () => {
    it('should be able to navigate to', () => {
      
        
      
        mount(<Routes> <Route path="/about" element={<About />} /></Routes>)
       
    //   cy.findByRole('textbox').type('nath')
    //   cy.findByTestId('SearchIcon').click()
    //   cy.findByText(/ranking: 783/i).should('be.visible').click()
    //   cy.loginAsAdmin()
     
    //   cy.findByRole('button', {  name: /editar/i})

      // cy.visitHome().loginAsAdmin()

      // .get('[href="/secret-adminny-stuff"]')
    
          // cy.findByRole('textbox').type('nath')
          // cy.findByRole('button', {name: /buscar jugador/i}).click()
          // cy.findByTestId('SearchIcon').click()
          // cy.findByText(/ranking: 783/i).should('be.visible').click()
        // .get('[href="/secret-adminny-stuff"]') // This link should only be visible to admins
        // .click()
        // .url()
        // .should('contain', 'secret-adminny-stuff/'); // non-admins should be redirected away from this url
    });
  });
