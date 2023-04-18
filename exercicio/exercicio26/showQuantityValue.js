const corVermelho = '#D3616C';
const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ã', 'â', 'ê', 'ô'];
const characterSpecials = ['[', ']', '(', ')', '@', '*', '*', '+', '/', '.', ',', ';','!', '$', '#', '&', '_'];

function getTotalLetter() {
  let contVowels = 0;
  let contConsonants = 0;

  let mensagemHtml = document.getElementsByClassName('message');
  let word = document.getElementById('word').value;

  printMessage(mensagemHtml,"");

  let letter = Array.from(word.toLowerCase());

  for(let index = 0; index < word.length; index++) {
      if(letter[index] == ' ' || letter[index] == '-') continue;

      if(isNumber(letter[index])) return printMessage(mensagemHtml,"Erro: Existe número entre as palavras ");

      if(isCharacterSpecial(letter[index])) return printMessage(mensagemHtml,"Erro: existe caracteres especiais");

      if(vowels.includes(letter[index]))
        contVowels++
      else
      contConsonants++
  }
  document.getElementById('resultVowels').value = contVowels;
  document.getElementById('resultConsonants').value = contConsonants;
}

function isNumber(letter) {
  if(Number(letter)) return true;
  return false
}

function isCharacterSpecial(letter) {
  if(characterSpecials.includes(letter)) return true;

  return false
}

function printMessage(mensagemHtml, mensagem) {
  if( mensagem ) {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = corVermelho;
    }
  } else {
    for (let i = 0; i < mensagemHtml.length; i++) {
      mensagemHtml[i].style.backgroundColor = '';
    }
  }
  return document.getElementsByClassName('message')[0].innerHTML = mensagem;
}

function cleanFields() {
  document.getElementById('word').value = '';
  document.getElementById('resultVowels').value = '';
  document.getElementById('resultConsonants').value = '';
}