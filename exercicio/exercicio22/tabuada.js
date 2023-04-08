const corVermelho = '#D3616C';

const messageError = "Não permitido inserir números negativos ou valor vazio";

function calcularTabuada() {
  let mensagemHtml = document.getElementsByClassName('mensagem');

  document.getElementById("table").innerHTML = '';
  imprimirMensagem(mensagemHtml,"")

  let numero = Number(document.getElementById('numero').value);

  if(validarValor(numero)) return imprimirMensagem(mensagemHtml, messageError);

  for(let numMultiplicado = 0; numMultiplicado <= 10; numMultiplicado++) {
    resultado = numero * numMultiplicado;
    document.getElementById("table").innerHTML += `${numero} X ${numMultiplicado} = ${resultado}`+ "<br>"; 
  }
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
  document.getElementById('numero').value = '';
}