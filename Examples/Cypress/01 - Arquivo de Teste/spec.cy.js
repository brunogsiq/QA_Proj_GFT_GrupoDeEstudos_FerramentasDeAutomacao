describe('template spec', () => {

	beforeEach(() => {
		//cy.visit('https://starbugs-qa.vercel.app/')
		cy.visit(Cypress.env("baseUrl"));
		cy.visit('/');
	});


	it('Validar acesso ao projeto', () =>
	{
		//Dado que acessei a url do projeto
		cy.visit('https://starbugs-qa.vercel.app/')

		//Quando a tela carregar

		//Então o sistema deverá apresentar o logotipo 
		cy.get('.hero')
			.should('be.visible')  
	});

	it('Validar url ao projeto', () =>
	{
		//Dado que acessei a url do projeot
		cy.visit('https://starbugs-qa.vercel.app/')

		//Quando validar a mesma

		//Então deverá ser ...
		cy.url()
			.should('eq', 'https://starbugs-qa.vercel.app/')
			
	});
})