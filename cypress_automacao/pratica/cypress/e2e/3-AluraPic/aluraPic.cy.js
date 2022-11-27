describe('Login e registro de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    });

    it('Verifica mensagens validação', () => {
        cy.contains('a', 'Register now').click()
        
    });
});