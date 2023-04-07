const corVermelho = '#D3616C';

const messageError = "Não permitido inserir números negativos ou valor vazio";

function calcularSalarioTotal() {
  let mensagemHtml = document.getElementsByClassName('mensagem');

  imprimirMensagem(mensagemHtml,"")

  let salario = Number(document.getElementById('salario').value);

  if(validarValor(salario)) return imprimirMensagem(mensagemHtml, messageError);

  if(salario <= 999) return calcularSalario(salario, 20);

  if(salario >= 1000 && salario <=2999) return calcularSalario(salario, 15);

  if(salario >= 3000 && salario <=7999) return calcularSalario(salario, 10);

  return calcularSalario(salario, 5);
}

function calcularSalario(salario, porcentagem) {
  let valorTotal = 0;
  let valorAumento = 0; 

  valorTotal = ((salario * porcentagem) / 100) + salario;
  valorAumento = valorTotal - salario;

  document.getElementById("salarioAumentado").value =  valorTotal.toFixed(2);  
  document.getElementById("porcentagem").value =  porcentagem + "%";
  return document.getElementById("valorAumento").value =  valorAumento.toFixed(2);
}

function validarValor(valor) {
  if (valor == "") return true;
  if (valor < 0.0) return true;
  if (isNaN(valor)) return true;

  return false;
}

function imprimirMensagem(mensagemHtml, mensagem) {
  if( mensagem ) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corVermelho;
    }
  } else {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = '';
    }
  }
  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function limparCampos() {
    document.getElementById('salario').value = '';
    document.getElementById('salarioAumentado').value = '';
    document.getElementById('porcentagem').value = '';
    document.getElementById('valorAumento').value = '';

}