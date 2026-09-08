const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const soma = document.querySelector(".soma");
const subtracao = document.querySelector(".subtracao");
const multiplicacao = document.querySelector(".multiplicacao");
const divisao = document.querySelector(".divisao");
const resultado = document.querySelector(".resultado");
const mensagemErro = document.querySelector(".mensagemErro");

function calcular(operacao) {
  const valor1 = num1.value;
  const valor2 = num2.value;

  if (valor1 === "" || valor2 === "") {
    mensagemErro.textContent = "⚠️ Atenção: Você precisa digitar os dois números!";
    mensagemErro.style.display = "block";
    resultado.textContent = "Resultado:";

    return;
  }

  const numero1 = Number(num1.value);
  const numero2 = Number(num2.value);

  if (operacao === "/" && numero2 === 0) {
    mensagemErro.textContent = "⚠️ Atenção: Não é possivel dividir por zero!"
    mensagemErro.style.display = "block";
    resultado.textContent = "Resultado:";

    return;
  }

  mensagemErro.textContent = "";
  mensagemErro.style.display = "none";

  let totalOperacao = 0;

  if (operacao === "+") totalOperacao = numero1 + numero2;
  if (operacao === "-") totalOperacao = numero1 - numero2;
  if (operacao === "*") totalOperacao = numero1 * numero2;
  if (operacao === "/") totalOperacao = numero1 / numero2;

  resultado.textContent = "Resultado: " + totalOperacao;


}

soma.addEventListener("click", function (){
  calcular("+");
})
subtracao.addEventListener("click", function (){
  calcular("-");
})
multiplicacao.addEventListener("click", function (){
  calcular("*");
})
divisao.addEventListener("click", function (){
  calcular("/");
})
