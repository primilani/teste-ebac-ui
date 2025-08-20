// Referencio o cypress
/// <reference types="cypress"/> 

describe('Funcionalidade: Login', () => {
    //Teste dentro do bloco

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') // visita a url indicada
        cy.get('#username').type('priscila.teste@teste.com.br')
        cy.get('#password').type('Teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, priscila.teste (não é priscila.teste? Sair)')
    })
})