function listarMenorNumero() {
  let primeiroNumero = Number(document.getElementById('primeiroNumero').value);
  let segundoNumero = Number(document.getElementById('segundoNumero').value);
  let terceiroNumero = Number(document.getElementById('terceiroNumero').value);

  let primeiroMaiorNumero = (primeiroNumero <= segundoNumero) && (primeiroNumero < terceiroNumero);

  let segundoMaiorNumero = (segundoNumero <= primeiroNumero) && (segundoNumero < terceiroNumero);

  let terceiroMaiorNumero = terceiroNumero <= primeiroNumero && terceiroNumero < segundoNumero;

  let numerosIguais = terceiroNumero === primeiroNumero && terceiroNumero === segundoNumero;

  if(primeiroMaiorNumero) {
    return document.getElementById('menorNumero').value = primeiroNumero
  };

  if(segundoMaiorNumero) {
    return document.getElementById('menorNumero').value = segundoNumero;
  }

  if(terceiroMaiorNumero) {
    return document.getElementById('menorNumero').value = terceiroNumero;
  }

  if(numerosIguais) 
    return document.getElementById('menorNumero').value = primeiroNumero;
}

function limparCampos() {
  document.getElementById('primeiroNumero').value = '';
  document.getElementById('segundoNumero').value = '';
  document.getElementById('terceiroNumero').value = '';
  document.getElementById('menorNumero').value = '';
}