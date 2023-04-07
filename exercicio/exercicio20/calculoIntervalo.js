const corVermelho = '#D3616C';

const messageError = "Não permitido inserir números negativos ou valor vazio";

function calcularIntervalo() {
  let resultado = 0;
  let mensagemHtml = document.getElementsByClassName('mensagem');

  imprimirMensagem(mensagemHtml,"")

  let numInicial = Number(document.getElementById('numInicial').value);
  let numFinal = Number(document.getElementById('numFinal').value);

  if(validarValor(numInicial)) return imprimirMensagem(mensagemHtml, messageError);
  
  if(validarValor(numFinal)) return imprimirMensagem(mensagemHtml, messageError);

  for(let valor = numInicial; valor <= numFinal; valor++) {
    resultado += valor;
  }

  document.getElementById("resultado").value =  resultado;  
}

function validarValor(valor) {
  if (valor == "") return true;
  if (valor < 0.0) return true;
  if (isNaN(valor)) return true;

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
    document.getElementById('numInicial').value = '';
    document.getElementById('numFinal').value = '';
    document.getElementById('resultado').value = '';
}