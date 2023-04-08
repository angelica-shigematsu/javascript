const corVermelho = '#D3616C';

const messageError = "Não permitido inserir números negativos ou valor vazio";

function mostrarPares() {
  let mensagemHtml = document.getElementsByClassName('mensagem');

  document.getElementById("table").innerHTML = '';
  imprimirMensagem(mensagemHtml,"")

  let numeroFinal = Number(document.getElementById('numeroFinal').value);

  if(validarValor(numeroFinal)) return imprimirMensagem(mensagemHtml, messageError);

  for(let numero = 1; numero <= numeroFinal; numero++) {

    if(numero % 2 == 0) 
      document.getElementById("table").innerHTML += numero + '<br>'; 
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
  document.getElementById('numeroFinal').value = '';
}