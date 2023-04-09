function mostrarEmOrdem() {
  let numeros = [];
  let mensagemHtml = document.getElementsByClassName('mensagem');

  imprimirMensagem(mensagemHtml,"")
  let numero1 = Number(document.getElementById('numero1').value);
  let numero2 = Number(document.getElementById('numero2').value);
  let numero3 = Number(document.getElementById('numero3').value);
  let numero4 = Number(document.getElementById('numero4').value);
  let numero5 = Number(document.getElementById('numero5').value);

  numeros.push(numero1, numero2, numero3, numero4, numero5);

  let resultado = sotearNumeros(numeros);

  document.getElementById('resultado').value = resultado;
}

function sotearNumeros(numeros) {
  return numeros.sort((a, b) => a - b);
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