const corVermelho = '#D3616C';

function calcularTroco() {
  let troco = null;
  
  let mensagemHtml = document.getElementsByClassName('mensagem')

  let precoUnitario = Number(document.getElementById('precoUnitario').value)
  let unidade = Number(document.getElementById('unidade').value)
  let dinheiro = Number(document.getElementById('dinheiro').value)
  let precoTotal = 0;

  if((validarValor(precoUnitario))) {
    return imprimirMensagem(mensagemHtml, "Preço unitário inválido");
  }

  if(validarValor(unidade)) {
    return imprimirMensagem(mensagemHtml,"Unidade inválida");
  }

  if(validarValor(dinheiro)) {
    return imprimirMensagem(mensagemHtml, "Dinheiro inválido");
  }
  
  precoTotal = calcularPrecoTotal(precoUnitario, unidade);

  if(dinheiro < precoTotal) return imprimirMensagem(mensagemHtml, `DINHEIRO INSUFICIENTE . FALTAM ${calcularDinheiroFalta(precoTotal,dinheiro)} REAIS.`)

  troco = (dinheiro - precoTotal); 

  document.getElementById("troco").value =  troco.toFixed(2); 
  imprimirMensagem(mensagemHtml, ""); 
  limparCampos();
}

function calcularPrecoTotal(precoUnitario, unidade) {
  return (precoUnitario * unidade).toFixed(2);
}

function calcularDinheiroFalta(precoTotal, dinheiro) {
  return precoTotal - dinheiro;
}

function validarValor(valor) {
  if ( valor <= 0 && valor != "") return true;

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
  document.getElementById('precoUnitario').value = '';
  document.getElementById('unidade').value = '';
  document.getElementById('dinheiro').value = '';
}