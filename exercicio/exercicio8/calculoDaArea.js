const corPreto = '#000000';
const corAmarelo = '#ECC062'

function calcularArea() {
  let mensagemHtml = document.getElementsByClassName('mensagem');

  let medidaA = Number(document.getElementById('medidaA').value);
  let medidaB = Number(document.getElementById('medidaB').value);
  let medidaC = Number(document.getElementById('medidaC').value);

  if(validarValor(medidaA)) return imprimirMensagem(mensagemHtml, 'Medida A está inválida');

  if(validarValor(medidaB)) return imprimirMensagem(mensagemHtml, 'Medida B está inválida');

  if(validarValor(medidaC)) return imprimirMensagem(mensagemHtml, 'Medida C está inválida');

  let calculoAreaQuadrado = calcularAreaQuadrado(medidaA);
  let calculoAreaTrianguloRetangulo = calcularAreaTrianguloRetangulo(medidaA, medidaB, medidaC);
  let calculoAreaTrapezio = calcularAreaTrapezio(medidaA, medidaB, medidaC);

  imprimirMensagem(mensagemHtml, '');

  document.getElementById("quadrado").value =  calculoAreaQuadrado.toFixed(4);

  document.getElementById("trianguloRetangulo").value =  calculoAreaTrianguloRetangulo.toFixed(4);

  document.getElementById("trapezio").value =  calculoAreaTrapezio.toFixed(4);

  limparCampos();
}

function calcularAreaQuadrado(medida) {
  return Math.pow(medida, 2);
}

function calcularAreaTrianguloRetangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaTrapezio(baseMenor, baseMaior, altura) {
  return ((baseMaior + baseMenor) * altura)/ 2;
}

function validarValor(valor) {
  if (valor != "" && !isNaN(valor)) return false;

  return true;
}

function imprimirMensagem(mensagemHtml, mensagem) {
  if( mensagem ) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corPreto;
    }
  } else {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corAmarelo;
    }
  }
  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function limparCampos() {
  document.getElementById('medidaA').value = '';
  document.getElementById('medidaB').value = '';
  document.getElementById('medidaC').value = '';
}