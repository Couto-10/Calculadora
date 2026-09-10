# 🧮 Calculadora JS — Evolução & Refatoração

Um projeto de calculadora simples desenvolvido para praticar a manipulação do **DOM (Document Object Model)** com JavaScript puro (Vanilla JS), HTML5 e CSS3.

O grande diferencial deste repositório é que ele registra a minha evolução técnica: comecei escrevendo o código de forma repetitiva e, em seguida, apliquei conceitos de **refatoração** para torná-lo profissional.

---

## 🚀 O Projeto

A calculadora realiza as quatro operações matemáticas básicas:
* Soma
* Subtração
* Multiplicação
* Divisão (com validação para evitar divisão por zero)

Também conta com validações na tela para garantir que o usuário preencha todos os campos antes de realizar o cálculo.

## Teste Aqui: https://couto-10.github.io/Calculadora/
---

## 🧠 O Aprendizado (Antes vs. Depois)

### ❌ Como o código começou
Na primeira versão, eu criei um escutador de eventos (`addEventListener`) diferente para cada botão de operação. Isso fez com que a lógica de validação de erros se repetisse quatro vezes no arquivo, ferindo o princípio **DRY (Don't Repeat Yourself)**.

###  Como o código ficou (Refatorado)
Para deixar o código limpo, legível e fácil de manter, eu centralizei toda a lógica em uma **única função genérica** chamada `calcular(operacao)`.

* **Uso de Parâmetros:** A função agora recebe o símbolo da operação dinamicamente.
* **Early Return (Retorno Precoce):** Usei o comando `return` estrategicamente para parar a função imediatamente caso ocorra um erro, eliminando blocos `else` gigantes.
* **Manutenibilidade:** Se eu precisar mudar a mensagem de erro ou adicionar uma função nova hoje, mudo em apenas um lugar.

### Atualização Futura

* **Melhora a Interface:** Atualmente você precisa digitar os números, mas futuramente poderá digitar ou escolher pelos botões.
---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura da página.
* **CSS3:** Estilização e design da interface.
* **JavaScript (ES6+):** Manipulação de eventos do DOM e lógica matemática.
* **Git & GitHub:** Controle de versão e histórico de commits.

---

## 🔧 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com
   ```
2. Abra o arquivo `index.html` diretamente no seu navegador.
