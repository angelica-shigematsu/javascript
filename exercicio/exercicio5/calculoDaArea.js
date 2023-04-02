const pi = 3.14159;

function calcularAreaCirculo() {
  let raio = Number(document.getElementById('raio').value)

  if(validarValor(raio)) {
    let areaCirculo = calcularArea(raio);

    document.getElementById("area").value =  areaCirculo.toFixed(3);
  } else {
    alert("Valores inválidos")
  }
}

function calcularArea(raio) {
  return pi * Math.pow(raio, 2);
}

function validarValor(valor) {
  if (valor != null && !isNaN(valor)) 
    return true

  return false;
}

function limparCampo() {
  document.getElementById('raio').value = '';
  document.getElementById('area').value = '';
}