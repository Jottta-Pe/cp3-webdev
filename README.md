Jean Pierre Andrade Feltran - RM 566534

Luara Martins de Oliveira Ramos - RM 565573


# 🛒 Cadastro de Produtos

## 📌 Regras Gerais

- O projeto pode ser realizado **individualmente ou em dupla**.
- É permitido o uso de **anotações em papel** como consulta.
- **Apenas comandos vistos em sala de aula** podem ser utilizados.
- ❌ **Não é permitido o uso de inteligência artificial**. Se houver indícios de uso, a nota será **zerada**.
- É permitido o uso do **Live Share** para desenvolvimento simultâneo entre a dupla.

---

## 📄 Descrição

Você deve criar uma **página de cadastro de produtos** com os seguintes elementos:

### 🔧 Formulário contendo:
- **Nome do produto** (`input type="text"`)
- **Preço** (`input type="number"`)
- **Categoria** (`select` com pelo menos 3 opções)
  - Duas categorias obrigatórias: `Tecnologia` e `Alimentos`
- Botão **"Cadastrar produto"**

### 📋 Área de exibição:
- Os produtos cadastrados devem ser exibidos em **formato de lista**.

---

## ✅ Regras e Funcionalidades Obrigatórias

### 1. **Validação com condicionais**
- Nenhum campo pode estar vazio.
- O preço deve ser **maior que zero** e conter **duas casas decimais** (utilizar método para isso).
- Caso essas condições não sejam atendidas:
  - Exibir uma **mensagem de erro abaixo do formulário**
  - **Não cadastrar o produto**

---

### 2. **Manipulação do DOM – Cadastro**
- Ao clicar em **“Cadastrar produto”** com dados válidos:
  - O produto deve ser exibido na área de exibição no seguinte formato:

    ```
    Produto: Caneca – R$ 25,00 – Categoria: Cozinha
    ```

---

### 3. **Limpeza do formulário**
- Após o cadastro bem-sucedido, o formulário deve ser **limpo automaticamente**.

---

### 4. **Manipulação do DOM – Destaque por categoria**
- Produtos da categoria **Tecnologia** → devem aparecer em **negrito**.
- Produtos da categoria **Alimentos** → devem aparecer com **fundo amarelo**.
- Outras categorias → exibição normal.

---

## 📤 Entrega

- Envie o link do repositório no **GitHub** na tarefa do **Microsoft Teams**.
- O `README.md` deve conter o **nome da dupla** (caso seja realizado em dupla).
