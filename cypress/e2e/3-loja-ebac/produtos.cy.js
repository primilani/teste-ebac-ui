      // Referencio o cypress
      /// <reference types="cypress"/> 

      describe('Funcionalidade: Produtos', () => {

      beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
      });


      it('Deve selecionar o primeiro produto da lista', () => { 
            cy.get('.product-block')
                  .first() 
                  .click()
      });

            it('Deve selecionar o último produto da lista', () => {
            cy.get('.block-inner')
                  .last()
                  .click()   
            });

            it('Deve selecionar o item na posição de número 2', () => { // Sempre iniciando a contagem em 0
            cy.get('.block-inner')
                  .eq(2) 
                  .click()  
            });

            it('Deve selecionar um produto por nome', () => { 
            cy.get('#content')
                  .contains('Arcadio Gym Short')
                  .click()  

                  cy.get('#tab-title-description > a').should('contain', 'Descrição')
            });
      
            
      });
