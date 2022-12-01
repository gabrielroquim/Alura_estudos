describe('Cadastro de usuários do alura Pic', () => {


    it('Cadastrar usuário no alura pic', () => {

        cy.contains('button', 'Register').click()
        cy.get(':nth-child(1) > .form-control').type("mertens@uol.gov")
        cy.get(':nth-child(2) > .form-control').type("c")
        cy.get(':nth-child(3) > .form-control').type("hazard_qa")
        cy.get(':nth-child(4) > .form-control').type("9083gdr!@")
        cy.get('.btn').click({ force: true })
        cy.get('.text-center').should('contain', 'Register to embrace a new world!')
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
        })
    });
});