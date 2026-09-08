const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const soma = document.querySelector(".soma");
const subtracao = document.querySelector(".subtracao");
const multiplicacao = document.querySelector(".multiplicacao");
const divisao = document.querySelector(".divisao");
const resultado = document.querySelector(".resultado");
const mensagemErro = document.querySelector(".mensagemErro");
const mensagemErroDivisao = document.querySelector(".mensagemErroDivisao");

soma.addEventListener("click", function() {
  const numero1 = (num1.value);
  const numero2 = (num2.value);
  if (numero1 === "" || numero2 === "") {
  mensagemErro.textContent =  "⚠️ Atenção: Você precisa digitar os dois números!";
  mensagemErro.style.display = "block";
  resultado.textContent = "Resultado:";
  }else {
    mensagemErro.textContent = "";
    mensagemErro.style.display = "none";

    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const totalOperacao = (numero1 + numero2);
    resultado.textContent = ("Resultado: " + totalOperacao);
  }



})

subtracao.addEventListener("click", function() {
  const numero1 = (num1.value);
  const numero2 = (num2.value);
  if (numero1 === "" || numero2 === "") {
    mensagemErro.textContent =  "⚠️ Atenção: Você precisa digitar os dois números!";
    mensagemErro.style.display = "block";
    resultado.textContent = "Resultado:";
  }else {
    mensagemErro.textContent = "";
    mensagemErro.style.display = "none";

    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const totalOperacao = (numero1 - numero2);
    resultado.textContent = ("Resultado: " + totalOperacao);

  }
})

multiplicacao.addEventListener("click", function() {
  const numero1 = (num1.value);
  const numero2 = (num2.value);
  if (numero1 === "" || numero2 === "") {
    mensagemErro.textContent =  "⚠️ Atenção: Você precisa digitar os dois números!";
    mensagemErro.style.display = "block";
    resultado.textContent = "Resultado:";
  }else {
    mensagemErro.textContent = "";
    mensagemErro.style.display = "none";

    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const totalOperacao = (numero1 * numero2);
    resultado.textContent = ("Resultado: " + totalOperacao);

  }
})

divisao.addEventListener("click", function() {
  const numero1 = (num1.value);
  const numero2 = (num2.value);
  if (numero1 == 0 || numero2 == 0) {
    mensagemErroDivisao.textContent =  "⚠️ Atenção: Você precisa digitar um número maior que 0!";
    mensagemErroDivisao.style.display = "block";
    resultado.textContent = "Resultado:";
  }else {
    mensagemErroDivisao.textContent = "";
    mensagemErroDivisao.style.display = "none";
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const totalOperacao = (numero1 / numero2);
    resultado.textContent = ("Resultado: " + totalOperacao);
  }
  if (numero1 === "" || numero2 === "") {
    mensagemErro.textContent =  "⚠️ Atenção: Você precisa digitar os dois números!";
    mensagemErro.style.display = "block";
    resultado.textContent = "Resultado:";
  }else {
    mensagemErro.textContent = "";
    mensagemErro.style.display = "none";

  }
})
