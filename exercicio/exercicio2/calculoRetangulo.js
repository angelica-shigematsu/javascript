function calcularRetangulo() {
  let base = Number(document.getElementById('base').value)
  let altura = Number(document.getElementById('altura').value)

  if(validarValor(base) && validarValor(altura)) {
    let areaQuadrado = calcularArea(base, altura);

    let perimetro = calcularPerimetro(base, altura);

    let diagonal = calcularDiagonal(base, altura);

    document.getElementById("area").value =  areaQuadrado.toFixed(4);
    document.getElementById("perimetro").value =  perimetro.toFixed(4);
    document.getElementById("diagonal").value =  diagonal.toFixed(4);

  } else {
    alert("Valores inválidos")
  }
}

function calcularArea(base, altura) {
  return base * altura;
}

function calcularDiagonal(base, altura) {
  return Math.sqrt(Math.pow(base,2) + Math.pow(altura, 2));
}

function calcularPerimetro(base, altura) {
  return (base * 2) + (altura * 2);
}

function validarValor(valor) {
  if (valor != null && !isNaN(valor)) 
    return true

  return false;
}

function limparCampo() {
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('area').value = '';
    document.getElementById("perimetro").value =  '';
    document.getElementById("diagonal").value =  '';
}