

describe('01 - Validar acesso a tela home', () => {
    it('01.1 - Validar acesso a tela home', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        
        cy.get('.col-sm-12 > #slider-carousel')
            .should('be.visible')
            .and('contain', 'Automation');

        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://automationexercise.com/');
    });

    it('01.2 - Validar acesso a tela home', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
        cy.get('#slider-carousel')
            .should('be.visible')
            .and('contain', 'Automation');

        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://automationexercise.com/');
    });

    it('01.3 - Validar acesso a tela home', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
        cy.get('.carousel.slide')
            .should('be.visible')
            .and('contain', 'Automation');

        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://automationexercise.com/');
    });

    it('01.4 - Validar acesso a tela home', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
        cy.get('.row > div > #slider-carousel')
            .should('be.visible')
            .and('contain', 'Automation');

        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://automationexercise.com/');
    });
});

describe('02 - Validar acesso a tela login/cadastro', () => {
    it('02.1 - Validar acesso a tela login/cadastro', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando realizar um evento de clique na opção de login/cadastro
        cy.get('a[href="/login"]')
            .click();    
        
        //Então a tela de login/cadastro deve ser exibida   
        cy.get('.login-form')
            .should('be.visible')
            .and('contain', 'Login to your account');

        //E a URL deve ser a esperada
        cy.url().should('eq', 'https://automationexercise.com/login');
    });
});

