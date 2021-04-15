/// <reference types="cypress" />

import React from 'react' 
import TextArea from "../../src/components/Textarea"   
import {mount} from 'cypress-react-unit-test' 
import {BrowserRouter as Router} from 'react-router-dom'


context('TextArea component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'  
    const indexCss = '/__root/src/componentes/TextArea/styles.css' 

    it('deve ser renderizado com sucesso', () => {
        const label = "Que incrível esse desafio do bootcamp cypress."
        const name= "Desafio Agilizei"
        mount(
        <Router>
            <TextArea
                label= {label}
                name={name}
          />
          </Router>
          , 
          {
            stylesheets: [baseCss, indexCss]  
          }
        )


        cy.get('label').as('label')
        cy.get('body').as('name')
        cy.get('.textarea-block').as('textarea')

        cy.get('@label').should('have.text', label)
        cy.get('@textarea').should('have.text', label)
                
       
        cy.get('@textarea').then(($elemento) => {
          cy.log($elemento.css('background-color'))
         
          expect($elemento.css('background-color')).to.be.equal('rgba(0, 0, 0, 0)')
        })

        

    });
});