function calcularTerreno() {

  let largura = Number(document.getElementById('largura').value)
  let comprimento = Number(document.getElementById('comprimento').value)
  let valor = document.getElementById('valor').value

  if(validarValor(largura) && validarValor(comprimento)) {
    let areaQuadrado = largura * comprimento;
    let valorTotal = valor * areaQuadrado;
    document.getElementById("area").value =  areaQuadrado.toFixed(2);
    document.getElementById("precoTotal").value =  valorTotal.toFixed(2);
  } else {
    alert("Valores inválidos")
  }
}

function validarValor(valor) {
  if (valor != null && !isNaN(valor)) 
    return true

  return false;
}

function limparCampo() {
    document.getElementById('largura').value = '';
    document.getElementById('comprimento').value = '';
    document.getElementById('valor').value = '';
    document.getElementById("area").value =  '';
    document.getElementById("precoTotal").value =  '';
}