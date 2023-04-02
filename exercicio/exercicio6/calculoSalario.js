const corPreto = '#000000';
const corCreme = '#F8EFE4';

function calcularSalario() {
  let salario = null;
  
  let mensagemHtml = document.getElementsByClassName('mensagem')

  let nome = document.getElementById('nome').value;
  let valorHora = Number(document.getElementById('valorHora').value);
  let qtdeHoras = Number(document.getElementById('qtdeHora').value);

  if(validarNome(nome)) {
    return imprimirMensagem(mensagemHtml, "Nome inválido", "", 0);
  }

  if(validarValor(valorHora)) {
    return imprimirMensagem(mensagemHtml, "Valor hora inválido", "", 0);
  }

  if(validarValor(qtdeHoras)) {
    return imprimirMensagem(mensagemHtml,"Qtdes de horas inválidas", "", 0);
  }

  salario = valorHora * qtdeHoras; 

  if (salario)  document.getElementsByClassName('mensagem')[0].innerHTML = `O pagamento para ${nome} deve ser ${salario}`;
  limparCampos();
}

function validarValor(valor) {
  if ( valor <= 0 ) return true;

  return false;
}

function imprimirMensagem(mensagemHtml, mensagem) {
  if( nome == "" && salario == 0 ) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corPreto;
    }
    return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
  } 
}

function validarNome(nome) {

  var padrao = /[0-9]/gi;
  if (padrao.test(nome) || nome == "") return true;

  return false;
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('valorHora').value = '';
  document.getElementById('qtdeHora').value = '';
}