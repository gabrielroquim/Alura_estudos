/// <reference types="cypress" />

describe('Login e registro de usuários alura pic', () => {


    before(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    });
//usando commands
    it('Realizar Login', () => {
     cy.login('gabriel','9083gdr!@')
        cy.get('.navbar-brand').should('contain', 'ALURAPIC')
        cy.contains( 'a', '(Logout)').should('be.visible')
        
    });

    it.only('Fazer login de usuário inválido', () => {
      cy.login('java23', 'casa34')
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Invalid user name or password')
        })
        
    });
});