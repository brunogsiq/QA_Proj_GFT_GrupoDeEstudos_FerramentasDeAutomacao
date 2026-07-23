/// <reference types="cypress" />

import { telaLogin } from '../../../support/pages/elementos';

const Tela_Login = new telaLogin();

let contexto = 1;
let cenario = 2;
let teste = 2;

describe(`${cenario} - Validar acesso a tela login/cadastro`, () => {
    let complemento = 1;

    beforeEach(() =>
    {
        //Executa antes de cada it
        cy.visit('/');
    });

    //Se houver
    afterEach(() =>
    {
        //Executa depois de cada it
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    });

    it(`${teste}.${complemento} - Validar acesso a tela login/cadastro`, () => {
        //Dado que a tela home foi acessada
        

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

    it.only(`${teste}.${++complemento} - Validar acesso a tela login/cadastro`, () => {
        //Dado que a tela home foi acessada
        //cy.visit('/');

        //Quando realizar um evento de clique na opção de login/cadastro
        Tela_Login.botao_Login
            .click();    
        
        //Então a tela de login/cadastro deve ser exibida   
        cy.get('.login-form')
            .should('be.visible')
            .and('contain', 'Login to your account');

        //E a URL deve ser a esperada
        cy.url().should('eq', 'https://automationexercise.com/login');
    });
});

