/// <reference types="cypress" />


describe('01 - Validações de rotas de acesso - Tela Home', () => {

    //Se houver
    afterEach(() =>
    {
        //Executa depois de cada it
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });

    it.skip('01.1 - Validar acesso a tela home', () => {
        //Dado que a tela home foi acessada
        cy.visit('https://petlov.vercel.app/');

        //Quando a página carregar
        cy.wait(150);

        //Então
        
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://petlov.vercel.app/');
    });

    it.skip('01.2 - ', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
        
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://petlov.vercel.app/l');
    });

    it.skip('01.3 - ', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
       
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://petlov.vercel.app/');
    });

    it.skip('01.4 - ', () => {
        //Dado que a tela home foi acessada
        cy.visit('/');

        //Quando a página carregar

        //Então o banner principal deve ser exibido
        
        //E a URL deve ser a esperada   
        cy.url().should('eq', 'https://petlov.vercel.app/');
    });
});

describe('02 - Validações de layout - Tela Home', () => {
    beforeEach(() =>
    {
        //Executa depois de cada it
        cy.visit('https://petlov.vercel.app/');
    });

    afterEach(() =>
    {
        //Executa depois de cada it
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });
    
    it('02.1 - Validar visualização do logo', () => {
        //Dado que a tela home foi acessada

        //Quando a página carregar

        //Então o logo deve ser exibido
        cy.get('.logo')
            .should('be.visible');
    });

    it('02.2 - Validar botão "Cadastrar', () => {
        //Dado que a tela home foi acessada

        //E o botão "Cadastrar" deve estar visível
        cy.get('a[href="/signup"]')
            .should('be.visible');

        //Quando validar o estilo do botão "Cadastrar"

        //Então o botão "Cadastrar" deve ter a cor de fundo esperada
        cy.get('a[href="/signup"]')
            .should('have.css', 'background-color', 'rgb(62, 40, 105)')
            .and('have.text', 'Cadastrar um ponto de doação')
            //.and('have.text', 'Cadastre um ponto de doação');
    });
});

describe('03 - Validações de rotas de acesso - Tela Cadastro', () => {
    beforeEach(() =>
    {
        //Executa depois de cada it
        cy.visit(Cypress.env('petLov'));
    });

    afterEach(() =>
    {
        //Executa depois de cada it
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });
    
    it('03.1 - Validar acesso a tela de cadastro', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });
});

let contexto = 1;
let cenario = 4;
let teste = 4;
describe(`${cenario} - Validações de layout - Tela Cadastro`, () => {
    
    let complemento = 1;

    beforeEach(() =>
    {
        //Executa depois de cada it
        cy.visit(Cypress.env('petLov'));
    });

    afterEach(() =>
    {
        //Executa depois de cada it
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });
    
    //it(`${teste}.${complemento} - Validar acesso a tela cadastro`, () => {
    it('4.1 - Validar acesso a tela cadastro', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });

    //it(`${teste}.${++complemento} - Validar acesso a tela cadastro`, () => {
    it('4.2 - Validar  X...', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });

    //it(`${teste}.${++complemento} - Validar acesso a tela cadastro`, () => {
    it('4.3 - Validar Y...', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });

    //it(`${teste}.${++complemento} - Validar acesso a tela cadastro`, () => {
    it('4.4 - Validar Z...', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });  
});

