function calcularNota() {
  let notaFinal = 0;
  let nota1 = Number(document.getElementById('nota1').value);
  let nota2 = Number(document.getElementById('nota2').value);

  notaFinal = nota1 + nota2;

  if(notaFinal < 60)
   return imprimirResultado(notaFinal, 'Reprovado');
  
   return imprimirResultado(notaFinal, 'Aprovado');
}

function limparCampos() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('notaFinal').value = '';
    document.getElementById('resultado').value = '';
}

function imprimirResultado(notaFinal, resultado) {
  console.log(resultado)
  document.getElementById('notaFinal').value = notaFinal;
  document.getElementById('resultado').value = resultado;
}