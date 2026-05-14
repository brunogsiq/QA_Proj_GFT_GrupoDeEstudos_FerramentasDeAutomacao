No Playwright, os **hooks** são funções especiais que permitem que você configure e execute operações antes e depois dos testes, como inicialização de contextos, limpeza de dados, ou execução de ações comuns a vários testes. Os principais hooks que você pode usar são:

### 1. **`beforeAll`**
O hook `beforeAll` é executado **antes de qualquer teste** no arquivo de teste. Ele é útil para configurar qualquer coisa que será usada por todos os testes, como criar um browser ou iniciar um servidor.

**Exemplo**:
```javascript
const { chromium } = require('playwright');

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test('Test 1', async () => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});
```

### 2. **`afterAll`**
O hook `afterAll` é executado **depois de todos os testes** do arquivo. Ele é usado para limpar ou fechar recursos, como o navegador.

**Exemplo**:
```javascript
const { chromium } = require('playwright');

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close(); // Fecha o browser após todos os testes
});

test('Test 1', async () => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});
```

### 3. **`beforeEach`**
O hook `beforeEach` é executado **antes de cada teste** individualmente. Isso é útil quando você precisa de uma configuração ou estado específico para cada teste.

**Exemplo**:
```javascript
const { chromium } = require('playwright');

let browser;
let page;

beforeEach(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

afterEach(async () => {
  await browser.close(); // Fecha o navegador após cada teste
});

test('Test 1', async () => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});

test('Test 2', async () => {
  await page.goto('https://playwright.dev');
  expect(await page.title()).toBe('Playwright');
});
```

### 4. **`afterEach`**
O hook `afterEach` é executado **depois de cada teste**. Pode ser útil para limpar ou redefinir o estado após cada teste, como limpar cookies ou dados.

**Exemplo**:
```javascript
const { chromium } = require('playwright');

let browser;
let page;

beforeEach(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close(); // Fecha a página após cada teste
});

test('Test 1', async () => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});

test('Test 2', async () => {
  await page.goto('https://playwright.dev');
  expect(await page.title()).toBe('Playwright');
});
```

### 5. **`beforeAll` e `afterAll` em contextos diferentes**
Você também pode usar os hooks `beforeAll` e `afterAll` em **contextos diferentes**, como quando usa contextos de navegador e páginas compartilhadas entre múltiplos testes.

**Exemplo**:
```javascript
const { chromium } = require('playwright');

let browser;
let context;

beforeAll(async () => {
  browser = await chromium.launch();
  context = await browser.newContext(); // Criação de um novo contexto de navegação
});

afterAll(async () => {
  await browser.close();
});

test('Test 1', async () => {
  const page = await context.newPage();
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
  await page.close();
});

test('Test 2', async () => {
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
  expect(await page.title()).toBe('Playwright');
  await page.close();
});
```

### 6. **`beforeAll`/`afterAll` com Fixtures**
Fixtures são objetos que você pode passar para os testes e são frequentemente usados com hooks para inicializar ou configurar dados compartilhados entre múltiplos testes.

**Exemplo com Fixture**:
```javascript
const { test, expect } = require('@playwright/test');

test.describe('Hooks com Fixtures', () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Test 1', async () => {
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Example Domain');
  });

  test('Test 2', async () => {
    await page.goto('https://playwright.dev');
    expect(await page.title()).toBe('Playwright');
  });
});
```

### 7. **Hooks dentro de `test.describe`**
Você pode agrupar múltiplos testes com o `test.describe` e aplicar hooks a todo o grupo de testes.

**Exemplo com `test.describe`**:
```javascript
const { test, expect } = require('@playwright/test');

test.describe('Testes agrupados', () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Test 1', async () => {
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Example Domain');
  });

  test('Test 2', async () => {
    await page.goto('https://playwright.dev');
    expect(await page.title()).toBe('Playwright');
  });
});
```

---

### Considerações Finais:
- **`beforeAll`/`afterAll`** são mais usados quando você precisa configurar ou limpar algo uma única vez para todos os testes.
- **`beforeEach`/`afterEach`** são mais úteis quando você precisa configurar ou limpar algo antes e depois de cada teste individualmente.
- Você pode combinar os hooks com **fixtures** para melhor controle de dados ou estados compartilhados entre os testes.

Esses hooks são fundamentais para gerenciar o fluxo de testes de maneira organizada e eficiente.