context('Exemplo do comando cy.visit', () => {
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Visitando páginas.`, () => {
		describe(`${cenario} - Mesma coisa de diferentes formas.`, () => {
			let complemento = 1;

			it(`${teste}.${complemento} - Visitando - 01`, () => {
				cy.visit('https://www.google.com/');
			});


			it(`${teste}.${++complemento} - Visitando - 02`, () => {
				cy.visit(Cypress.config().baseUrl);
			});


			it(`${teste}.${++complemento} - Visitando - 03`, () => {
				cy.visit('/')
			});

			it(`${teste}.${++complemento} - Visitando - 04`, () => {
				cy.visit('gp/bestsellers/?ref_=nav_cs_bestsellers')
			});


			it(`${teste}.${++complemento} - Visitando - 05`, () => {
				cy.visit(Cypress.env('dev'))
				cy.visit(Cypress.env('tst'))
				cy.visit(Cypress.env('hml'))
				cy.visit(Cypress.env('prod'))
			});
		});
	})
});

  