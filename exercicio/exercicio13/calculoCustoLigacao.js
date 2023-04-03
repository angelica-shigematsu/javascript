const corVermelho = '#BD1627';

function calcularCustoLigacao() {
  let tempoExcedido = 0;
  let totalApagar = 0;

  let mensagemHtml = document.getElementById('mensagem');

  document.getElementById('totalApagar').value =  '';

  let minutosLigacao = Number(document.getElementById('minutosLigacao').value);

  if (minutosLigacao < 0) return imprimirMensagem(mensagemHtml, 'Nâo é permitido inserir números negativos')

  if(minutosLigacao > 100) {
    tempoExcedido = minutosLigacao - 100;

    totalApagar = 50 + tempoExcedido * 2;
  } else {
    totalApagar = 50;
  }

  document.getElementById('totalApagar').value = totalApagar.toFixed(2);

  imprimirMensagem(mensagemHtml, '')
}

function imprimirMensagem(mensagemHtml, mensagem) {
  if(mensagem) {
    mensagemHtml.style.color = corVermelho;
  }else{
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = '';
    }
  }
  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function limparCampos() {
  document.getElementById('minutosLigacao').value = '';
  document.getElementById('totalApagar').value = '';
}