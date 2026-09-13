const botoesNumeros = document.querySelectorAll('.num');
const visorOperacoes = document.querySelector(".operacaoNum");
const visorResultado = document.querySelector(".resultadoLayout");
const soma = document.querySelector(".soma");
const subtracao = document.querySelector(".subtracao");
const multiplicacao = document.querySelector(".multiplicacao");
const divisao = document.querySelector(".divisao");
const resultado = document.querySelector(".total");
const mensagemErro = document.querySelector(".mensagemErro");
const excluir = document.querySelector(".excluir");
const botaoTema = document.querySelector(".botaoTema");
const temaEscuro = document.querySelector(".container");

let primeiroNum = "";
let segundoNum = "";
let operador = "";
let totalOperacao = 0;
let resultadoCalculadora = false;

botoesNumeros.forEach(botao => {
  botao.addEventListener('click', () => {

    visorOperacoes.textContent += botao.textContent;

    if (resultadoCalculadora === true) {

      primeiroNum = "";
      segundoNum = "";
      operador = "";
      resultadoCalculadora = false;

    }

    visorResultado.textContent = "";
    mensagemErro.style.display = "none"
    mensagemErro.textContent = "";



    if (operador === ""){
      primeiroNum = visorOperacoes.textContent;
    }else {
      segundoNum = visorOperacoes.textContent;
    }
  })
})

soma.addEventListener('click', () => {
  if (primeiroNum === ""){
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";


  }else if (segundoNum !== "") {
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";

  }else {
    operador = "+";
    visorOperacoes.textContent = "";
  }


})

subtracao.addEventListener('click', () => {
  if (primeiroNum === ""){
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";

  }else if (segundoNum !== "") {
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";

  }else {
    operador = "-";
    visorOperacoes.textContent = "";
  }

})

multiplicacao.addEventListener('click', () => {
  if (primeiroNum === ""){
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";

  }else if (segundoNum !== "") {
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";

  }else {
    operador = "*";
    visorOperacoes.textContent = "";
  }

})

divisao.addEventListener('click', () => {
  if (primeiroNum === ""){
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";

  }else if (segundoNum !== "") {
    mensagemErro.textContent = "⚠️ Atenção: Finalize a operação primeiro";
    mensagemErro.style.display = "block";

  } else {
    operador = "/";
    visorOperacoes.textContent = "";
  }

})

resultado.addEventListener('click', () => {

  if (primeiroNum === "" || segundoNum === "" || operador === "") {
    mensagemErro.textContent = "⚠️ Atenção: Formato usado inválido";
    mensagemErro.style.display = "block";

    return;
  }

  const numero1 = Number(primeiroNum);
  const numero2 = Number(segundoNum);



  if (operador === "+"){
    totalOperacao = numero1 + numero2;
  }

  if (operador === "-"){
    totalOperacao = numero1 - numero2;

  }
  if (operador === "*"){
    totalOperacao = numero1 * numero2;

  }
  if (operador === "/" && numero2 === 0) {
    mensagemErro.textContent = "⚠️ Atenção: Não é possivel dividir por zero!";
    mensagemErro.style.display = "block";

    return;

  } else if (operador === "/"){
    totalOperacao = numero1 / numero2;

  }

  visorResultado.textContent = totalOperacao;
  visorOperacoes.textContent = "";
  resultadoCalculadora = true;

})

excluir.addEventListener('click', () => {

  if(operador === ""){
    const novoNum = primeiroNum.slice(0,-1)
    visorOperacoes.textContent = novoNum;
    primeiroNum = novoNum;
    mensagemErro.textContent = "";


  }else{
    const novoNum = segundoNum.slice(0,-1)
    visorOperacoes.textContent = novoNum;
    segundoNum = novoNum;
    mensagemErro.textContent = "";
    mensagemErro.style.display = "none";
  }






})

botaoTema.addEventListener('click', () => {
  temaEscuro.classList.toggle("temaClaro");

})





