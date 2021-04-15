/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />



context('Connections endpoint', () => {
    it('', () => {
    cy.api({
        method: 'GET',
        url: `${Cypress.config().apiUrl}/connections`

    }).then((response) =>{
        expect(response.status).to.eq(200)
        expect(response.duration).lt(250)
        expect(response.body).to.have.property('total').to.be.a('number').gt(5)
        expect(response.body.total).an('number').satisfy((totalValue) => {return totalValue >5})
      
        //Content-header
        expect(response.headers).to.have.property('content-type').an('string').equal('application/json; charset=utf-8')  
})



    });
});