/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();


context('Landing Pages', () => {
    beforeEach(() => {
        cy.visit('/')

    });
    it('Navegar para o cadastro de aulas', () => {
        cy.get('div a.give-classes').click()
        cy.url().should('contain', 'give-classes')

        cy.get('input#name').type(chance.name());
        cy.get('input#avatar').type('https://i.imgur.com/3g9JQPc.jpeg');
        cy.get('input#whatsapp').type(chance.phone({ formatted: false }));
        cy.get('textarea#bio').type(chance.sentence());
        cy.get('select#subject').type('Artes');
        cy.get('input#cost').type('50');
        cy.get('select#week_day').select('2');
        cy.get('input#from').click(chance.hour({ twentyfour: true }));
        cy.get('input#to').click(chance.hour({ twentyfour: true }));

        cy.get('button[type=submit]').click();

        cy.url().should('contain', 'http://localhost:3000');

    });
    it('Navegar para pesquisa de professores', () => {
        cy.get('div a.study').click()
        cy.url().should('contain', 'study')

        //preencher dados
        cy.get('select#subject').type('Artes');
        cy.get('select#week_day').select('6');
        cy.get('input#time').click(chance.hour());


        cy.get('button[type=submit]').click();

        cy.url().should('contain', 'http://localhost:3000');

    })
});
