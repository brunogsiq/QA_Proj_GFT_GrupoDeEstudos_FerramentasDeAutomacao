/// <reference types="cypress" />

describe('01 - Validar acesso a tela home', () => {

    //Se houver
    afterEach(() =>
    {
        //Executa depois de cada it
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });

    it('01.1 - Validar acesso a tela home', () => {
        //Dado que a tela home foi acessada
        cy.visit('https://starbugs.vercel.app/');

        //Quando a página carregar
        cy.wait(150);

        //Então
        
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://starbugs.vercel.app/');
    });

    it.skip('01.2 - ', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
        
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://starbugs.vercel.app/');
    });

    it.skip('01.3 - ', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
       
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://starbugs.vercel.app/');
    });

    it.skip('01.4 - ', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
        
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://starbugs.vercel.app/');
    });
});

describe('02 - ', () => {
    //Se houver
    beforeEach(() =>
    {
        //Executa depois de cada it
        //cy.visit("/");
        cy.visit("https://starbugs.vercel.app/");
    });
    
    //Se houver
    afterEach(() =>
    {
        //Executa depois de cada it
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });

    it('02.1 - Validar visualização do logotipo', () => {
        cy.get("img")
            .eq(0)
            .should("be.visible");
    });
});

