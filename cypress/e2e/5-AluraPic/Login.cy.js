/// <reference types="cypress" />


describe('Login de usuários do aluraPic', () => {

    before(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    });

    it('Realizar Login', () => {
        cy.get(':nth-child(1) > .form-control').type("gabriel")
        cy.get(':nth-child(2) > .form-control').type("9083gdr!@")
        cy.contains('button', 'login').click()
        cy.get('.navbar-brand').should('contain', 'ALURAPIC')
        cy.contains('a', '(Logout)').should('be.visible')

    });

    it('Fazer login de usuário inválido', () => {
        cy.get(':nth-child(1) > .form-control').type("gyyyabriel")
        cy.get(':nth-child(2) > .form-control').type("9083gdr!@")
        cy.contains('button', 'login').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })

    });
})


