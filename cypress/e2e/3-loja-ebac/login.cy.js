// Referencio o cypress
/// <reference types="cypress"/> 

describe('Funcionalidade: Login', () => {
    //Teste dentro do bloco

    beforeEach(() => { //Hook - gancho
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') // visita a url indicada
    });

    afterEach(() => { // Depois de cada testes print a tela
        cy.screenshot()
    });


    // CENÁRIOS POSITIVOS

    it('Deve fazer login com sucesso', () => {  
        cy.get('#username').type('priscila.teste@teste.com.br')
        cy.get('#password').type('Teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, priscila.teste (não é priscila.teste? Sair)')
    })


    // CENÁRIOS NEGATIVOS

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => { //it.only - testa apenas o caso selecionado  
        cy.get('#username').type('priscila@teste.com.br')
        cy.get('#password').type('Teste@123')
        cy.get('.woocommerce-form > .button').click()     
        //cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.') // Validação da mensagem de erro
        cy.get('.woocommerce-error').should('exist') // validação se existe a mensagem de erro
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('priscila.teste@teste.com.br')
        cy.get('#password').type('Teste@1234')
        cy.get('.woocommerce-form > .button').click()  
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail priscila.teste@teste.com.br')
        cy.get('.woocommerce-error').should('exist') // validação se existe a mensagem de erro
        

        
    });




})