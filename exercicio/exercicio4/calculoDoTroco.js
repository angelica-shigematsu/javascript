const corPreto = '#000000';
const corVerde = '#3CB371';

function calcularTroco() {
  let troco = null;
  
  let mensagemHtml = document.getElementsByClassName('mensagem')

  let precoUnitario = Number(document.getElementById('precoUnitario').value)
  let unidade = Number(document.getElementById('unidade').value)
  let dinheiro = Number(document.getElementById('dinheiro').value)

  if((validarValor(precoUnitario))) {
    return imprimirMensagem(mensagemHtml, "Preço unitário inválido");
  }

  if(validarValor(unidade)) {
    return imprimirMensagem(mensagemHtml,"Unidade inválida");
  }

  if(validarValor(dinheiro)) {
    return imprimirMensagem(mensagemHtml, "Dinheiro inválido");
  }

  troco = dinheiro - (precoUnitario * unidade); 

  document.getElementById("troco").value =  troco.toFixed(2); 
  if (troco) imprimirMensagem(mensagemHtml, ""); 
}

function validarValor(valor) {
  if ( valor <= 0 ) return true;

  return false;
}

function imprimirMensagem(mensagemHtml, mensagem) {
  if( mensagem ) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corPreto;
    }
  } else {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corVerde;
    }
  }

  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function limparCampos() {
  document.getElementById('precoUnitario').value = '';
  document.getElementById('unidade').value = '';
  document.getElementById('dinheiro').value = '';
}