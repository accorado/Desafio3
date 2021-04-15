/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {

                "name": "agilizei",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswuXpAHTkt0DrGZTir5aJASzTEn4yeypDFQ&usqp=CAU",
                "whatsapp": "1123456543",
                "bio": "qualquer coisa aqui para preencher o desafio",
                "subject": "Artes",
                "cost": 20,
                "schedule": [
                    {
                        "week_day": 2,
                        "from": "12:00",
                        "to": "13:00"
                    }
                ]
            }

        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.duration).lt(200)
            expect(response.headers).to.have.property('content-type').an('string').equal('application/json; charset=utf-8')
        })

    });
});

