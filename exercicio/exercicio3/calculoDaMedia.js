function calcularMediaIdade() {
  let mensagemHtml = document.getElementsByClassName('mensagem');

  let nome1 = document.getElementById('nome1').value
  let idade1 = Number(document.getElementById('idade1').value)

  let nome2 = document.getElementById('nome2').value
  let idade2 = Number(document.getElementById('idade2').value)

  if(validarNome(nome1) || validarNome(nome2)) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = "#000000";
    }
    return document.getElementsByClassName('mensagem')[0].innerHTML = 
      `Nome inválido`;
  }

  if(validarValor(idade1) || validarValor(idade2)) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = "#000000";
    }
    return document.getElementsByClassName('mensagem')[0].innerHTML = 
      'Idade inválida';
  }

    let mediaIdade = calcularMedia(idade1, idade2);

    limparCampos();

    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = "#000000";
    }

    document.getElementsByClassName('mensagem')[0].innerHTML = 
      `A idade média de ${nome1} e ${nome2} é de ${mediaIdade} anos`;
}

function calcularMedia(idade1, idade2) {
  return (idade1 + idade2) / 2;
}

function validarNome(nome) {

  var padrao = /[0-9]/gi;
  if (padrao.test(nome) || nome == "") return true;

  return false;
}

function validarValor(valor) {
  if (valor != 0 && !isNaN(valor)) { 
    return false 
  }

  return true;
}

function limparCampos() {
    document.getElementById('nome1').value = '';
    document.getElementById('nome2').value = '';
    document.getElementById('idade1').value = '';
    document.getElementById("idade2").value =  '';
}