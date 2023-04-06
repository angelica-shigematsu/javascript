const corVermelho = '#D3616C';

const messageError = "Não permitido inserir números negativos ou valor vazio";

function classificarMaiorDistancia() {
  
  let mensagemHtml = document.getElementsByClassName('mensagem');

  let primeiraDistancia = Number(document.getElementById('primeiraDistancia').value)
  let segundaDistancia = Number(document.getElementById('segundaDistancia').value)
  let terceiraDistancia = Number(document.getElementById('terceiraDistancia').value)

  if(validarValor(primeiraDistancia))
    return imprimirMensagemErro(mensagemHtml, messageError);

  if (validarValor(segundaDistancia)) {
    return imprimirMensagemErro(mensagemHtml, messageError);
  }

  if (validarValor(terceiraDistancia)) {
    return imprimirMensagemErro(mensagemHtml, messageError);
  }

  let primeiroMaiorNumero = (primeiraDistancia >= segundaDistancia) && (primeiraDistancia > terceiraDistancia);

  let segundoMaiorNumero = (segundaDistancia >= primeiraDistancia) && (segundaDistancia > terceiraDistancia);

  let terceiroMaiorNumero = terceiraDistancia >= primeiraDistancia && terceiraDistancia > segundaDistancia;

  let numerosIguais = terceiraDistancia === primeiraDistancia && terceiraDistancia === segundaDistancia;

  if (primeiroMaiorNumero)  {
    imprimirMensagemErro(mensagemHtml, "");
    return document.getElementById('maiorDistancia').value = primeiraDistancia;
  }

  if (segundoMaiorNumero)  {
    imprimirMensagemErro(mensagemHtml, "");
    return document.getElementById('maiorDistancia').value = segundaDistancia;
  }

  if (terceiroMaiorNumero)  {
    imprimirMensagemErro(mensagemHtml, "");
    return document.getElementById('maiorDistancia').value = terceiraDistancia;
  }

  if(numerosIguais) {
    imprimirMensagemErro(mensagemHtml, "");
    return document.getElementById('maiorDistancia').value = primeiraDistancia;
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
  document.getElementById('primeiraDistancia').value = '';
  document.getElementById('segundaDistancia').value= '';
  document.getElementById('terceiraDistancia').value= '';
  document.getElementById('maiorDistancia').value= '';
}