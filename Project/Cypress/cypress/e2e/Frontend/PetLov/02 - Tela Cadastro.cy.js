/// <reference types="cypress" />

let contexto = 1;
let cenario = 1;
let teste = 1;
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
    it('1.1 - Validar acesso a tela cadastro', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });

    //it(`${teste}.${++complemento} - Validar acesso a tela cadastro`, () => {
    it('1.2 - Validar  X...', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });

    //it(`${teste}.${++complemento} - Validar acesso a tela cadastro`, () => {
    it('1.3 - Validar Y...', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });

    //it(`${teste}.${++complemento} - Validar acesso a tela cadastro`, () => {
    it('1.4 - Validar Z...', () => {
        //Dado que a tela home foi acessada

        //Quando realizar um evento de clique no botão "Cadastrar"
        cy.get('a[href="/signup"]')
            .click();

        //Então o logo deve ser exibido
        cy.get('h1')
            .should('be.visible');
    });  
});

