function listarMenorNumero() {
  let primeiroNumero = Number(document.getElementById('primeiroNumero').value);
  let segundoNumero = Number(document.getElementById('segundoNumero').value);
  let terceiroNumero = Number(document.getElementById('terceiroNumero').value);

  let primeiroMenorNumero = (primeiroNumero <= segundoNumero) && (primeiroNumero < terceiroNumero);

  let segundoMenorNumero = (segundoNumero <= primeiroNumero) && (segundoNumero < terceiroNumero);

  let terceiroMenorNumero = terceiroNumero <= primeiroNumero && terceiroNumero < segundoNumero;

  let numerosIguais = terceiroNumero === primeiroNumero && terceiroNumero === segundoNumero;

  if(primeiroMenorNumero) {
    return document.getElementById('menorNumero').value = primeiroNumero
  };

  if(segundoMenorNumero) {
    return document.getElementById('menorNumero').value = segundoNumero;
  }

  if(terceiroMenorNumero) {
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