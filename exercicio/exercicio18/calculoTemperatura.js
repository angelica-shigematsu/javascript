const corVermelho = '#D3616C';

const messageError = "Não permitido inserir valor vazio";

function calcularTemperatura() {
  let resultado = 0;
  
  let mensagemHtml = document.getElementsByClassName('mensagem');
  let opcao = document.getElementById('opcao').value;
  let temperatura = Number(document.getElementById('temperatura').value);

  if(validarValor(temperatura))
    return imprimirMensagemErro(mensagemHtml, messageError);

  if(opcao == 'C') {
    imprimirMensagemErro(mensagemHtml, "");
    resultado = calcularEmCelsius(temperatura);
    return document.getElementById('resultado').value = resultado.toFixed(2);
  }

  if(opcao =='F') {
    imprimirMensagemErro(mensagemHtml, "");
    resultado = calcularEmFahreineit(temperatura);
    return document.getElementById('resultado').value = resultado.toFixed(2);
  }
}

function validarValor(valor) {
  if (valor == "") return true;

  return false;
}

function calcularEmCelsius(temperatura) {
  return (temperatura * 9/5) + 32;
}

function calcularEmFahreineit(temperatura) {
  return (temperatura - 32) * 5/9;
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
  document.getElementById('temperatura').value = '';
  document.getElementById('resultado').value = '';
}