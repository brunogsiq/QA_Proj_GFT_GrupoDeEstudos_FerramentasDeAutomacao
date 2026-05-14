/*
    Execução dos testes:
        npx playwright test  
            Executa todos os testes
        npx playwright test myTest.spec.ts 
            Executa um arquivo específico
        npx playwright test --grep "login"  
            Executa testes que contêm a palavra "login"

    Localizando Elementos
        await page.locator('text=Login'); 
            Localiza por texto
        await page.locator('#username'); 
            Localiza por ID
        await page.locator('.btn-primary'); 
            Localiza por classe CSS
        await page.locator('[name="email"]'); 
            Localiza por atributo

    Interagindo com Elementos
        await page.fill('#username', 'meu_usuario'); 
            Preencher campo
        await page.click('button[type="submit"]'); 
            Clicar em botão
        await page.check('#remember-me'); 
            Marcar checkbox
        await page.uncheck('#remember-me'); 
            Desmarcar checkbox
        await page.selectOption('select#country', 'BR'); 
            Selecionar dropdown
        await page.type('#search', 'Playwright'); 
            Digitar texto

    Esperas (Waits)
        await page.waitForSelector('#success-message'); 
            Espera elemento aparecer
        await page.waitForTimeout(3000); 
            Espera 3 segundos
        await page.waitForLoadState('networkidle'); 
            Espera a rede estar ociosa

    Asserções (Verificações)
        const { expect } = require('@playwright/test');
        expect(await page.locator('h1').textContent())
            .toContain('Bem-vindo');
        await expect(page.locator('#success-message'))
            .toBeVisible();
        await expect(page.locator('#error-message'))
            .toHaveText('Erro ao fazer login');

    Captura de Screenshot e Gravação de Vídeo
        await page.screenshot({ path: 'screenshot.png' })
            Tirar print
        await page.video().saveAs('video.mp4'); 
            Gravar vídeo (se habilitado no contexto)

    Executando em Diferentes Navegadores
        npx playwright test --browser=chromium
        npx playwright test --browser=firefox
        npx playwright test --browser=webkit

    Depuração (Debugging)**  
        npx playwright codegen https://example.com  
            Gera código automaticamente
        DEBUG=pw:api npx playwright test  
            Debug detalhado no terminal
*/