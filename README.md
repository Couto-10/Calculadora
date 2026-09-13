# 🧮 Calculadora JS — Evolução, Lógica & Refatoração

Um projeto de calculadora desenvolvido para praticar a manipulação avançada do **DOM (Document Object Model)** com JavaScript puro (Vanilla JS), HTML5 e CSS3.

O grande diferencial deste repositório é o registro da minha evolução técnica. O projeto foi dividido em duas fases: a primeira focada em organização de código (V1) e a segunda focada em UX e gerenciamento de estado (V2).

---

## 🚀 O Projeto & Recursos

A calculadora realiza as quatro operações matemáticas básicas (Soma, Subtração, Multiplicação e Divisão) e conta com duas interfaces distintas que marcam meu aprendizado:

*   **Interface V1 (Inputs):** Sistema baseado em campos de texto onde o usuário digita os valores isolados.
*   **Interface V2 (Teclado Numérico):** Layout moderno em formato de grade (Grid), simulando uma calculadora real onde os fluxos de cliques constroem a expressão matemática.
*   **Alternador de Tema (Dark/Light Mode):** Integração entre JavaScript e variáveis CSS para manipulação de classes e customização visual.

---

## 🧠 O Aprendizado Técnico (Antes vs. Depois)

### ❌ Como o código começou (V1)
Na primeira versão, criei um escutador de eventos (`addEventListener`) diferente para cada botão de operação. Isso fez com que a lógica de validação se repetisse quatro vezes no arquivo, ferindo o princípio **DRY (Don't Repeat Yourself)**.

###  Como o código ficou (Refatorado)
Para deixar o código limpo, legível e escalável, centralizei a execução em uma **única função genérica** chamada `calcular(operacao)`.
*   **Uso de Parâmetros:** A função recebe o símbolo da operação dinamicamente.
*   **Early Return (Retorno Precoce):** Uso estratégico do `return` para interromper a função imediatamente caso ocorra um erro (como campos vazios), eliminando blocos `else` aninhados e gigantes.

---

## 🛠️ Desafios Técnicos Superados na Versão Clássica (V2)

A transição para o layout de teclado numérico (V2) trouxe desafios de lógica muito mais complexos do que a versão inicial:

*   **Gerenciamento de Estado:** Controlar internamente o número atual, o número anterior e o operador selecionado sem perder o histórico do cálculo.
*   **Delegação de Eventos (Event Delegation):** Capturar os cliques no teclado numérico de forma eficiente utilizando um único escutador no container principal, em vez de aplicar um evento para cada botão individual.
*   **Tratamento de Strings e Limpeza:** Implementar a lógica do botão de *Backspace* (apagar último caractere) e reset total dos dados após a execução do sinal de igual (`=`).

---

## 💻 Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica da interface.
*   **CSS3 (Flexbox & Grid):** Construção do layout responsivo e transições de tema.
*   **JavaScript (ES6+):** Manipulação dinâmica do DOM, lógica de eventos e tratamento de estados.
*   **Git & GitHub:** Controle de versão e histórico de commits demonstrando a evolução do código.

---

## 🔧 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com
   ```
2. Abra o arquivo `index.html` diretamente no seu navegador.
