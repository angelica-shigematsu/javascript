const corVermelho = '#D3616C';

const messageError = "Não permitido inserir números negativos ou valor vazio";

function classificarNumerosMultiplos() {

  let numerosMultiplos = [];
  
  let mensagemHtml = document.getElementsByClassName('mensagem');

  let primeiroNumero = Number(document.getElementById('primeiroNumero').value)
  let segundoNumero = Number(document.getElementById('segundoNumero').value)

  if(validarValor(primeiroNumero))
    return imprimirMensagemErro(mensagemHtml, messageError);

  if (validarValor(segundoNumero)) {
    return imprimirMensagemErro(mensagemHtml, messageError);
  }

  for(let index = 1; index <= 10; index++) {
    for(let index2 = 1; index2 <= 10; index2++) {
      numerosMultiplos.push(index * index2);
    }
    if(numerosMultiplos.includes(primeiroNumero) && numerosMultiplos.includes(segundoNumero)) {
      imprimirMensagemErro(mensagemHtml, "");
      return document.getElementById('resultado').value = 'múltiplos';
    }
    numerosMultiplos = [];
  }
  imprimirMensagemErro(mensagemHtml, "");
  return document.getElementById('resultado').value = 'não múltiplos';
}

function validarValor(valor) {
  if ( valor <= 0 && valor == "") return true;

  return false;
}

function imprimirMensagemErro(mensagemHtml, mensagem) {
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
  document.getElementById('primeiroNumero').value = '';
  document.getElementById('segundoNumero').value= '';
  document.getElementById('resultado').value= '';
}