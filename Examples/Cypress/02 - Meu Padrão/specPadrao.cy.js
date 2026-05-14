/*
	var pessoa = {
		nome: 'Nome Teste Sobrenome Teste',
		cpf: '0109191001091910',
		email: 'emailteste@teste.com',
		telefone: '+55 01 90109 1910'
	}
*/

/// <reference types="cypress" />

context.skip('Tela Home.', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - End To End.`, () => 
	{
		
		describe(`${cenario} - Validações de Fluxos Funcionais.`, () => 
		{
			let complemento = 1;

			//Se houver
			beforeEach(() =>
			{
				cy.visit("/");
			});

			//Se houver
			afterEach(() =>
			{
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it(`${teste}.${complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});
		});
    });
});