export class Tela_Home
{
    get nomeElemento() {
        return cypress.get('...')
    };
};

export class telaLogin
{
    get botao_Login() {
        return cy.get('a[href="/login"]')
    };
};