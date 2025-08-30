// Referencio o cypress
/// <reference types="cypress"/> 
import { faker } from '@faker-js/faker'; //FAKER - cria massa de dados fake, para utilizar em fomularios

describe('Funcionalidade: Cadastro', () => {

    // antes de tudo, visite a pagina tal
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email()) //gera um email fake
        cy.get('#reg_password').type('Teste@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName()) // primeiro nome fake
        cy.get('#account_last_name').type(faker.person.lastName()) // sobrenome fake

        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });

        it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
            var nome = faker.person.firstName()
            var email = faker.internet.email(nome) //faz com que o email tenha o mesmo primeiro nome
            var sobrenome = faker.person.lastName()
            
        cy.get('#reg_email').type(email) //gera um email fake
        cy.get('#reg_password').type('Teste@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome) // primeiro nome fake
        cy.get('#account_last_name').type(sobrenome) // sobrenome fake

        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });
    
});