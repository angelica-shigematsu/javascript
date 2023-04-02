const corPreto = '#000000';
function calcularConsumoMedio() {
  let mensagemHtml = document.getElementsByClassName('mensagem')

  let distanciaEmKm = Number(document.getElementById('distanciaEmKm').value)
  let gastoCombustivel = Number(document.getElementById('gastoCombustivel').value)

  console.log(validarValor(distanciaEmKm));
  if(validarValor(distanciaEmKm)) return imprimirMensagem(mensagemHtml,'Distância inválida')

  if(validarValor(gastoCombustivel)) return imprimirMensagem(mensagemHtml,'Gasto de combustível inválido')
    let calculoConsumo = calcularConsumo(distanciaEmKm, gastoCombustivel);

    document.getElementById("consumoMedio").value =  calculoConsumo.toFixed(3);  
}

function calcularConsumo(distanciaEmKm, gastoCombustivel) {
  return distanciaEmKm / gastoCombustivel;
}

function validarValor(valor) {
  if (valor != "" && !isNaN(valor)) return false;

  return true;
}

function imprimirMensagem(mensagemHtml, mensagem) {
  for (let i = 0; i < mensagemHtml.length; i++) {
    mensagemHtml[i].style.backgroundColor = corPreto;
  }
  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function limparCampo() {
    document.getElementById('distanciaEmKm').value = '';
    document.getElementById('gastoCombustivel').value = '';
}