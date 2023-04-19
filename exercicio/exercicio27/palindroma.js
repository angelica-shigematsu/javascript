const messageIsPalindrome = 'É palíndroma';
const messageIsNotPalindrome = 'Não é palíndroma'

function checkPalindroma() {
  let wordReserve = [];
  let word = document.getElementById('word').value;
  
  wordReserve = word.split('');
  wordReserve = wordReserve.reverse();
  wordReserve = wordReserve.join('');

  if(word == wordReserve) 
   return document.getElementById('result').value = messageIsPalindrome;

  return document.getElementById('result').value = messageIsNotPalindrome;
}

function cleanFields() {
  document.getElementById('word').value = '';
  document.getElementById('result').value = '';
}