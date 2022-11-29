/// <reference types="cypress" />

describe('Login e registro de usuários alura pic', () => {


    before(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    });

    it('Verifica mensagens validação', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        
    });

    it('Cadastrar usuário no alura pic', () => {

         cy.contains('button', 'Register').click()        
         cy.get(':nth-child(1) > .form-control').type("mertens@uol.gov")
         cy.get(':nth-child(2) > .form-control').type("Hazard")
         cy.get(':nth-child(3) > .form-control').type("hazard_qa")
         cy.get(':nth-child(4) > .form-control').type("9083gdr!@")
         cy.get('.btn').click({force: true })
         cy.get('.text-center').should('contain', 'Register to embrace a new world!')             
    });
});