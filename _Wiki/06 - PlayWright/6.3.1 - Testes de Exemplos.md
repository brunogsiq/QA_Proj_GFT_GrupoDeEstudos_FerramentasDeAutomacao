/*
    Em ordem alfabética:

    page.addInitScript("");
	page.addListener
	page.addLocatorHandler("");
	page.addScriptTag("");
	page.addStyleTag("");
	page.bringToFront	
	page.check
	page.click
	page.clock.setFixedTime(0);
	page.close
	page.content
	page.context
	page.coverage
	page.dblclick
	page.dispatchEvent
	page.dragAndDrop
	page.emulateMedia
	page.evaluate
	page.evaluateHandle
	page.exposeBinding
	page.exposeFunction
	page.fill
	page.focus
	page.frame
	page.frameLocator
	page.frames
	page.getAttribute("")
	page.getByAltText
	page.getByLabel
	page.getByPlaceholder
	page.getByRole
	page.getByTestId
	page.getByText
	page.getByTitle
	page.goBack
	page.goForward
	page.goto("")
	page.hover
	page.innerHTML
	page.innerText
	page.inputValue
	page.isChecked
	page.isClosed
	page.isDisabled
	page.isEditable
	page.isEnabled
	page.isHidden
	page.isVisible
	page.locator
	page.mainFrame
	page.mouse.click
	page.mouse.dblclick
	page.mouse.down
	page.mouse.move
	page.mouse.up
	page.mouse.wheel
	page.off
	page.on
	page.once
	page.opener
	page.pause
	page.pdf
	page.prependListener
	page.press
	page.reload
	page.removeAllListeners
	page.removeListener
	page.removeLocatorHandler
	page.request.delete
	page.request.dispose
	page.request.fetch
	page.request.get
	page.request.head
	page.request.patch
	page.request.post
	page.request.put
	page.request.storageState
	page.requestGC
	page.route
	page.routeFromHAR
	page.routeWebSocket
	page.screenshot
	page.selectOption
	page.setChecked
	page.setContent
	page.setDefaultNavigationTimeout
	page.setDefaultTimeout
	page.setExtraHTTPHeaders
	page.setInputFiles
	page.setViewportSize
	page.tap
	page.textContent
	page.title
	page.uncheck
	page.unroute
	page.unrouteAll
	page.url
	page.video
	page.viewportSize
	page.waitForEvent
	page.waitForFunction
	page.waitForLoadState
	page.waitForRequest
	page.waitForResponse
	page.waitForSelector
	page.waitForSelector
	page.waitForTimeout
	page.waitForURL
	page.workers

    ### **Manipulação de Scripts e Estilos**  
    - `page.addInitScript("")` – Adiciona um script que será executado antes de qualquer outro na página.  
    - `page.addScriptTag("")` – Adiciona um script externo ou inline à página.  
    - `page.addStyleTag("")` – Adiciona uma folha de estilo CSS à página.  

    ### **Eventos e Listeners**  
    - `page.addListener` – Adiciona um ouvinte de eventos à página.  
    - `page.removeListener` – Remove um ouvinte de eventos da página.  
    - `page.prependListener` – Adiciona um ouvinte de evento que será chamado antes dos outros.  
    - `page.once` – Adiciona um ouvinte de evento que será chamado apenas uma vez.  
    - `page.on` – Escuta eventos da página.  
    - `page.off` – Remove um ouvinte de eventos da página.  
    - `page.waitForEvent` – Aguarda a ocorrência de um evento específico na página.  

    ### **Navegação e Controle da Página**  
    - `page.bringToFront` – Traz a página para o primeiro plano.  
    - `page.close` – Fecha a página.  
    - `page.context` – Retorna o contexto do navegador.  
    - `page.goto("")` – Navega para uma URL específica.  
    - `page.goBack` – Navega para a página anterior no histórico.  
    - `page.goForward` – Navega para a próxima página no histórico.  
    - `page.reload` – Recarrega a página atual.  
    - `page.url` – Retorna a URL da página.  

    ### **Interação com Elementos**  
    - `page.check` – Marca uma checkbox ou um radio button.  
    - `page.click` – Clica em um elemento da página.  
    - `page.dblclick` – Realiza um duplo clique em um elemento.  
    - `page.fill` – Preenche um campo de entrada com um valor.  
    - `page.focus` – Dá foco a um elemento da página.  
    - `page.hover` – Move o cursor sobre um elemento.  
    - `page.tap` – Simula um toque em um elemento (uso em dispositivos móveis).  
    - `page.press` – Pressiona uma tecla em um elemento.  
    - `page.selectOption` – Seleciona uma opção em um `<select>`.  
    - `page.setChecked` – Define o estado de um checkbox.  
    - `page.uncheck` – Desmarca um checkbox.  

    ### **Manipulação de Elementos**  
    - `page.locator` – Cria um localizador para um elemento.  
    - `page.getByText` – Localiza um elemento pelo texto visível.  
    - `page.getByLabel` – Localiza um elemento pelo rótulo `<label>`.  
    - `page.getByPlaceholder` – Localiza um elemento pelo placeholder.  
    - `page.getByRole` – Localiza um elemento pelo seu papel (role).  
    - `page.getByTestId` – Localiza um elemento pelo atributo `data-testid`.  
    - `page.getByTitle` – Localiza um elemento pelo atributo `title`.  
    - `page.getByAltText` – Localiza um elemento pelo atributo `alt`.  
    - `page.getAttribute("")` – Obtém o valor de um atributo de um elemento.  
    - `page.inputValue` – Obtém o valor atual de um campo de entrada.  
    - `page.textContent` – Obtém o texto de um elemento.  
    - `page.innerHTML` – Obtém o HTML interno de um elemento.  
    - `page.innerText` – Obtém o texto visível de um elemento.  

    ### **Verificações de Estado**  
    - `page.isChecked` – Verifica se um checkbox está marcado.  
    - `page.isDisabled` – Verifica se um elemento está desabilitado.  
    - `page.isEditable` – Verifica se um elemento é editável.  
    - `page.isEnabled` – Verifica se um elemento está habilitado.  
    - `page.isHidden` – Verifica se um elemento está oculto.  
    - `page.isVisible` – Verifica se um elemento está visível.  
    - `page.isClosed` – Verifica se a página foi fechada.  

    ### **Espera e Sincronização**  
    - `page.waitForSelector` – Aguarda um seletor aparecer na página.  
    - `page.waitForTimeout` – Aguarda um tempo específico antes de continuar.  
    - `page.waitForURL` – Aguarda a navegação para uma URL específica.  
    - `page.waitForFunction` – Aguarda uma função JavaScript retornar `true`.  
    - `page.waitForLoadState` – Aguarda a página atingir um estado de carregamento.  
    - `page.waitForRequest` – Aguarda uma requisição específica ser feita.  
    - `page.waitForResponse` – Aguarda uma resposta específica da rede.  

    ### **Mouse e Teclado**  
    - `page.mouse.click` – Simula um clique do mouse.  
    - `page.mouse.dblclick` – Simula um duplo clique do mouse.  
    - `page.mouse.down` – Simula o pressionamento do botão do mouse.  
    - `page.mouse.up` – Simula o soltar do botão do mouse.  
    - `page.mouse.move` – Move o cursor do mouse para uma posição específica.  
    - `page.mouse.wheel` – Simula a rolagem do mouse.  

    ### **Execução de Código e Eventos**  
    - `page.evaluate` – Executa código JavaScript no contexto da página.  
    - `page.evaluateHandle` – Executa código JavaScript e retorna um objeto manipulável.  
    - `page.exposeBinding` – Exponibiliza uma função JavaScript para a página.  
    - `page.exposeFunction` – Exponibiliza uma função JavaScript global para a página.  
    - `page.dispatchEvent` – Dispara um evento em um elemento.  

    ### **Manipulação de Frames e Janelas**  
    - `page.frame` – Obtém um frame específico dentro da página.  
    - `page.frameLocator` – Localiza um elemento dentro de um frame.  
    - `page.frames` – Retorna todos os frames da página.  
    - `page.mainFrame` – Obtém o frame principal da página.  
    - `page.opener` – Retorna a página que abriu a página atual.  

    ### **Manipulação de Requisições**  
    - `page.request.get` – Faz uma requisição GET.  
    - `page.request.post` – Faz uma requisição POST.  
    - `page.request.put` – Faz uma requisição PUT.  
    - `page.request.patch` – Faz uma requisição PATCH.  
    - `page.request.delete` – Faz uma requisição DELETE.  
    - `page.request.head` – Faz uma requisição HEAD.  
    - `page.request.fetch` – Obtém recursos via rede.  
    - `page.request.storageState` – Obtém o estado de armazenamento das credenciais da página.  
    - `page.request.dispose` – Descarta a requisição.  
    - `page.requestGC` – Força a coleta de lixo de memória.  

    ### **Captura de Tela e PDF**  
    - `page.screenshot` – Captura uma imagem da página.  
    - `page.pdf` – Gera um PDF da página.  

    ### **Manipulação da Rede e Cache**  
    - `page.route` – Intercepta requisições de rede.  
    - `page.routeFromHAR` – Usa um arquivo HAR para simular respostas de rede.  
    - `page.routeWebSocket` – Intercepta conexões WebSocket.  
    - `page.unroute` – Remove uma interceptação de requisição.  
    - `page.unrouteAll` – Remove todas as interceptações de requisição.  

    ### **Configuração e Ajustes**  
    - `page.setContent` – Define o HTML da página.  
    - `page.setViewportSize` – Define o tamanho da janela do navegador.  
    - `page.setInputFiles` – Faz upload de arquivos.  
    - `page.setExtraHTTPHeaders` – Define cabeçalhos HTTP adicionais.  
    - `page.setDefaultTimeout` – Define o tempo limite padrão para ações.  
    - `page.setDefaultNavigationTimeout` – Define o tempo limite para navegação.  
*/