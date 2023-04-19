const corVermelho = '#D3616C';
const messageOnlyNumber = 'Digite apenas números';
const messageOnlyFiveDigit = 'Digite apenas 5 números'

function getNumbers() {
  let mensagemHtml = document.getElementsByClassName('message');

  let smallerNumber = 0;
  let greaterNumber = 0;
  let numbers = [];
  let convertInNumber = [];
  let hasCharacter = false;
  let character = document.getElementById('word').value;

  printMessage(mensagemHtml,"");

  numbers = character.split(',');

  for(let index = 0; index < numbers.length; index++) {
    convertInNumber.push(Number(numbers[index]));
  }
  
  hasCharacter = convertInNumber.includes(NaN);

  if(hasCharacter) 
    return printMessage(mensagemHtml, messageOnlyNumber);

  if(numbers.length > 5 || numbers.length < 5 ) 
    return printMessage(mensagemHtml, messageOnlyFiveDigit);

  numbers = numbers.sort((number1, number2) => number1 - number2);

  smallerNumber = numbers[0];
  greaterNumber = numbers[numbers.length - 1];

  return document.getElementById('result').value = smallerNumber + ' e ' + greaterNumber;
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
  document.getElementById('result').value = '';
}