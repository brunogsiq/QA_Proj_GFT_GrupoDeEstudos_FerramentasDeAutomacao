/// <reference types="cypress" /> 

import 'cypress-wait-until';

Cypress.Commands.add('cyref', ('/// <reference types="cypress" />'));

Cypress.Commands.add('acessaTelas', (buttonName, pageTitle) =>
{
    cy.visit('/');

    cy.preencheLogin('papito@webdojo.com', 'katana123');

    cy.contains('button', buttonName)
        .click();

    cy.waitUntil(()=> 
        cy.contains('h1', pageTitle)
            .should('be.visible'));

    cy.contains('h1', pageTitle)
        .should('be.visible');
});

Cypress.Commands.add("preencheLogin", (email, senha) => 
{
    cy.get('#email')
        .type(email);

    cy.get('#password')
        .type(senha);

    cy.contains('button', 'Entrar')
        .click();
});