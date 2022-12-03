// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (nome, senha) =>{
    cy.get(':nth-child(1) > .form-control').type(nome)
    cy.get(':nth-child(2) > .form-control').type(senha)
    cy.contains('button', 'login').click()
})

//Não mostrar a senha use Log: false
Cypress.Commands.add('login2', (nome, senha) =>{
    cy.get('input[formcontrolname="userName"]').type(nome);
    console.log(nome)
    console.log(senha)
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();
})