/// <reference types="cypress" />


describe('Login e registro de usuários alura pic', () => {

    before(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    });
    const usuarios = require('../../fixtures/user.json')
    //usar forEach pois como na fixtures temps mais de um p foreach vai fazer o cadastro de mais de uma
    usuarios.forEach(usuario => {

        it(`Cadastrar usuário no alura pic ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click()            
            cy.get(':nth-child(1) > .form-control').type(usuario.email)
            cy.get(':nth-child(2) > .form-control').type(usuario.fullName)
            cy.get(':nth-child(3) > .form-control').type(usuario.userName)
            cy.get(':nth-child(4) > .form-control').type(usuario.password)
            cy.contains('button', 'Register').click()         
            
        });
    })
});