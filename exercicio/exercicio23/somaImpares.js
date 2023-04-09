const corVermelho = '#D3616C';

const messageError = "Não permitido inserir números negativos ou valor vazio";

function somarImpares() {
  let numerosImpares = [];
  let mensagemHtml = document.getElementsByClassName('mensagem');

  imprimirMensagem(mensagemHtml,"")

  let numeroInicial = Number(document.getElementById('numeroInicial').value);
  let numeroFinal = Number(document.getElementById('numeroFinal').value);

  if(validarValor(numeroInicial)) return imprimirMensagem(mensagemHtml, messageError);

  if(validarValor(numeroFinal)) return imprimirMensagem(mensagemHtml, messageError);

  for(let numero = (numeroInicial+1); numero < numeroFinal; numero++) {
    if(numero % 2 == 1) {
      numerosImpares.push(numero);
    }
  }
  let resultado = somar(numerosImpares);

  document.getElementById('resultado').value = resultado;
}

function somar(numeros) {
  return numeros.reduce((numero1, numero2) => numero1 + numero2);
}

function validarValor(valor) {
  if (valor == "") return true;
  if (valor < 0.0) return true;

  return false;
}

function imprimirMensagem(mensagemHtml, mensagem) {
  if( mensagem ) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corVermelho;
    }
  } else {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = '';
    }
  }
  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function limparCampos() {
  document.getElementById('numeroInicial').value = '';
  document.getElementById('numeroFinal').value = '';
}