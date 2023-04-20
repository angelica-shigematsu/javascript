const corVermelho = '#D3616C';
const messageOnlyNumber = 'Digite apenas números';
const messageOnlyFiveDigit = 'Digite apenas 5 números'

function validateDigit() {
  let mensagemHtml = document.getElementsByClassName('message');
  let sum = 0;
  let cont = 5;
  let lastDigit = 0;
  let cnpj = document.getElementById('cnpj').value;
  let cnpjWithDigit = []

  cnpj = cnpj.replaceAll('.', '');
  cnpj = cnpj.replaceAll('/', '');
  cnpj = cnpj.replaceAll('-', '');

  cnpj = cnpj.split('');

  for(let index = 0; index < cnpj.length-2; index++)
    cnpjWithDigit.push(cnpj[index]);

  sum = sumDigit(sum, cont, 0, cnpj, 4);

  cont = 9;

  sum = sumDigit(sum, cont, 4, cnpj, 12);

  lastDigit = getLastDigit(sum);

  cnpjWithDigit.push(lastDigit);

  cont = 6;
  sum = 0;

  sum = sumDigit(sum, cont, 0, cnpj, 5);

  cont = 9;

  sum = sumDigit(sum, cont, 5, cnpj, 13);

  lastDigit = getLastDigit(sum);

  cnpjWithDigit.push(lastDigit);

  if(cnpjWithDigit[12] != cnpj[12])
    return document.getElementById('result').value = 'Inválido'
  
  if(cnpjWithDigit[13] != cnpj[13])
    return document.getElementById('result').value = 'Inválido';

  return document.getElementById('result').value = 'Válido';
}

function getLastDigit(sum) {
  let lastDigit = 0;

  lastDigit = sum % 11;

  if(lastDigit < 2) { 
    lastDigit = 0;
  } else {
    lastDigit = 11 - lastDigit;
  }
  return lastDigit;
}

function sumDigit(sum, cont, numInicial, cnpj, numFinal) {
  for(let index = numInicial; index < numFinal; index++) {
    sum += Number(cnpj[index]) * cont;
    cont--;
  }
  return sum;
}

function cleanFields() {
  document.getElementById('word').value = '';
  document.getElementById('result').value = '';
}