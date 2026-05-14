/*
    Em ordem alfabética:
        expect().toBeCloseTo
        expect().toBeCloseTo
        expect().toBeDefined
        expect().toBeFalsy
        expect().toBeGreaterThan
        expect().toBeGreaterThanOrEqual
        expect().toBeInstanceOf
        expect().toBeLessThan
        expect().toBeNaN
        expect().toBeNull
        expect().toBeTruthy
        expect().toBeUndefined
        expect().toContain
        expect().toContainEqual
        expect().toEqual
        expect().toHaveLength
        expect().toHaveProperty
        expect().toMatch
        expect().toMatchObject
        expect().toMatchSnapshot
        expect().toStrictEqual
        expect().toThrow
        expect().toThrowError

#### Comandos de Asserção

    1. **`expect(value).toBeCloseTo(expected)`** – Verifica se o valor está próximo do valor esperado (útil para comparações de números com precisão limitada).
    2. **`expect(value).toBeDefined()`** – Verifica se o valor não é `undefined`.
    3. **`expect(value).toBeFalsy()`** – Verifica se o valor é "falsy" (um valor que é convertido para `false` em um contexto booleano).
    4. **`expect(value).toBeGreaterThan(expected)`** – Verifica se o valor é maior que o esperado.
    5. **`expect(value).toBeGreaterThanOrEqual(expected)`** – Verifica se o valor é maior ou igual ao esperado.
    6. **`expect(value).toBeInstanceOf(constructor)`** – Verifica se o valor é uma instância do construtor especificado.
    7. **`expect(value).toBeLessThan(expected)`** – Verifica se o valor é menor que o esperado.
    8. **`expect(value).toBeNaN()`** – Verifica se o valor é `NaN`.
    9. **`expect(value).toBeNull()`** – Verifica se o valor é `null`.
    10. **`expect(value).toBeTruthy()`** – Verifica se o valor é "truthy" (um valor que é convertido para `true` em um contexto booleano).
    11. **`expect(value).toBeUndefined()`** – Verifica se o valor é `undefined`.
    12. **`expect(value).toContain(expected)`** – Verifica se o valor contém a string ou item especificado.
    13. **`expect(value).toContainEqual(expected)`** – Verifica se o valor contém um item igual ao especificado (útil para arrays ou objetos).
    14. **`expect(value).toEqual(expected)`** – Verifica se o valor é estritamente igual ao esperado (comparação profunda).
    15. **`expect(value).toHaveLength(expected)`** – Verifica se o valor tem o comprimento especificado (útil para arrays ou strings).
    16. **`expect(value).toHaveProperty(propertyName, value)`** – Verifica se o valor tem a propriedade especificada, e opcionalmente o valor dessa propriedade.
    17. **`expect(value).toMatch(regexp)`** – Verifica se o valor corresponde à expressão regular fornecida.
    18. **`expect(value).toMatchObject(expected)`** – Verifica se o valor é um objeto que contém as propriedades especificadas (para objetos).
    19. **`expect(value).toMatchSnapshot()`** – Verifica se o valor corresponde à "snapshot" (útil para testes visuais ou de comparação de estado).
    20. **`expect(value).toStrictEqual(expected)`** – Verifica se o valor é estritamente igual ao esperado (incluindo tipos e valores).
    21. **`expect(value).toThrow(expected)`** – Verifica se a função lança o erro especificado.
    22. **`expect(value).toThrowError(expected)`** – Verifica se a função lança o erro especificado (sinônimo de `toThrow`).

    #### Comandos Específicos de Locators (Playwright)

    1. **`expect(locator).toBeChecked()`** – Verifica se o checkbox ou radio button está marcado.
    2. **`expect(locator).toBeDisabled()`** – Verifica se o elemento está desabilitado.
    3. **`expect(locator).toBeEnabled()`** – Verifica se o elemento está habilitado.
    4. **`expect(locator).toBeHidden()`** – Verifica se o elemento está oculto.
    5. **`expect(locator).toBeVisible()`** – Verifica se o elemento está visível.
    6. **`expect(locator).toHaveAttribute(attribute, value)`** – Verifica se o elemento possui o atributo especificado com o valor esperado.
    7. **`expect(locator).toHaveClass(className)`** – Verifica se o elemento tem a classe CSS especificada.
    8. **`expect(locator).toHaveCount(count)`** – Verifica se o número de elementos correspondentes ao seletor é igual ao valor especificado.
    9. **`expect(locator).toHaveCSS(property, value)`** – Verifica se o elemento possui uma propriedade CSS específica com o valor esperado.
    10. **`expect(locator).toHaveText(text)`** – Verifica se o texto do elemento corresponde ao texto especificado.
    11. **`expect(locator).toHaveValue(value)`** – Verifica se o valor de um campo de entrada (como um `<input>`) corresponde ao valor especificado.
    12. **`expect(page).toHaveTitle(title)`** – Verifica se a página possui o título especificado.
    13. **`expect(page).toHaveURL(url)`** – Verifica se a página possui a URL especificada.

    ### Explicações de Alguns Comandos

    - **`toBeChecked()`**: Verifica se um elemento de entrada (como um checkbox ou radio button) está marcado.
    - **`toBeEnabled()`**: Verifica se um controle, como um botão ou campo de formulário, está habilitado.
    - **`toBeVisible()`**: Verifica se um elemento está visível na página.
    - **`toContainText()`**: Verifica se o texto de um elemento contém o texto especificado.
    - **`toHaveAttribute()`**: Verifica se um elemento possui um atributo específico com o valor esperado.
    - **`toHaveCount()`**: Verifica se a quantidade de elementos encontrados por um seletor é igual ao número esperado.
    - **`toHaveText()`**: Verifica se o texto do elemento corresponde exatamente ao texto esperado.
    - **`toHaveValue()`**: Verifica se o valor de um campo de entrada (como um `<input>`) corresponde ao valor esperado.
    - **`toHaveTitle()`**: Verifica se a página possui o título especificado.
    - **`toHaveURL()`**: Verifica se a URL da página corresponde à especificada.
*/