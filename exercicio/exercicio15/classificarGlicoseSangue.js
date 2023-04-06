const corVermelho = '#D3616C';

const qtdeGlicoseNormal = 100;
const qtdeGlicoseEvelevado = 140;

function classificarGlicoseSangue() {
  
  let mensagemHtml = document.getElementsByClassName('mensagem')

  let qtdeGlicose = Number(document.getElementById('qtdeGlicose').value)

  if(validarValor(qtdeGlicose))
    return imprimirMensagemErro(mensagemHtml, "Não permitido inserir números negativos");

  if (qtdeGlicose < qtdeGlicoseNormal) {
    imprimirMensagemErro(mensagemHtml, "");
    return document.getElementById('classificacao').value = `Normal` 
  }

  if (qtdeGlicose < qtdeGlicoseEvelevado) {
    imprimirMensagemErro(mensagemHtml, "");
    return document.getElementById('classificacao').value = `Elevado`
  }

    if (qtdeGlicose > qtdeGlicoseEvelevado)  {
      imprimirMensagemErro(mensagemHtml, "");
      return document.getElementById('classificacao').value = `Diabetes`
    }
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
  document.getElementById('qtdeGlicose').value = '';
  document.getElementById('classificacao').value = '';
}