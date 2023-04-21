const corPreto = '#000000';

function calcularBhaskara() {

  document.getElementById("x1").value =  '';
  document.getElementById("x2").value = '';

  let raiz = 0;
  let mensagemHtml = document.getElementsByClassName('mensagem');

  let medidaA = Number(document.getElementById('medidaA').value);
  let medidaB = Number(document.getElementById('medidaB').value);
  let medidaC = Number(document.getElementById('medidaC').value);

  raiz = calcularRaiz(medidaB, medidaA, medidaC);

  if(raiz < 0) return imprimirMensagem(mensagemHtml, 'Esta equação não possui raízes reais');

  coeficienteX = calcularCoefienteX(medidaB, raiz, medidaA);
  coeficienteY = calcularCoefienteY(medidaB, raiz, medidaA);

  document.getElementById("x1").value = coeficienteX.toFixed(4);

  document.getElementById("x2").value = coeficienteY.toFixed(4);
}

function calcularRaiz(b, a, c) {
  return Math.pow(b, 2) - (4 * a * c);
}

function calcularCoefienteX(b, raiz, a) {
  return (-(b) + Math.sqrt(raiz)) / (2 * a);
}

function calcularCoefienteY(b, raiz, a) {
  return (-(b) - Math.sqrt(raiz)) / (2 * a);
}

function imprimirMensagem(mensagemHtml, mensagem) {
  for (let i = 0; i < mensagemHtml.length; i++) {
    mensagemHtml[i].style.backgroundColor = corPreto;
  }
  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function limparCampos() {
  document.getElementById('medidaA').value = '';
  document.getElementById('medidaB').value = '';
  document.getElementById('medidaC').value = '';
  document.getElementById("x1").value =  '';
  document.getElementById("x2").value = '';
}