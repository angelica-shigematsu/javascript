const corVermelho = '#D3616C';
const messageError = 'Somente insira números de até 2 algorismo e sem ser negativos'
function getNameOfNumbers() {
    let number = document.getElementById('number').value;
    let result = '';

    let mensagemHtml = document.getElementsByClassName('message');

    let isNumberTenToNineteen = Number(number) >= 10 && Number(number) <= 19 ;
    let isNumberZeroToNine = Number(number) >= 0 && Number(number) <= 9;

    if(Number(number) < 0 || Number(number) > 99)
        return printMessage(mensagemHtml, messageError);

    if (isNumberZeroToNine) {
        result = nameOfNumbers(number);
        return document.getElementById('result').value = result;
    }
    
    if (isNumberTenToNineteen) {
        result = nameOfElevenToNinteen(number);
        return document.getElementById('result').value = result;

    } 
    
    if (number[0] > 1) {
        result = nameOfTens(number[0]);
        if(number[1] != 0) 
            result += ' e '+ nameOfNumbers(number[1]);
        return document.getElementById('result').value = result;
    }

    document.getElementById('result').value = result;
}


function nameOfNumbers(number) {
    let name = '';
    switch(number) {
        case '0':
            name = 'Zero';
            break;
        case '1':
            name = 'Um';
            break;
        case '2': 
            name = 'Dois';
            break;
        case '3':
            name = 'Três';
            break;
        case '4':
            name = 'Quatro';
            break;
        case '5':
            name = 'Cinco';
            break;
        case '6':
            name = 'Seis';
            break;
        case '7': 
            name = 'Sete';
            break;
        case '8':
            name = 'Oito';
            break;
        case '9':
            name = 'Nove';
            break;    
    }

    return name;
}

function nameOfTens(number) {
    let name = '';
    switch(number) {
        case '1':
            name = 'Dez';
            break;
        case '2': 
            name = 'Vinte';
            break;
        case '3':
            name = 'Trinta';
            break;
        case '4':
            name = 'Quarenta';
            break;
        case '5':
            name = 'Cinquenta';
            break;
        case '6':
            name = 'Sessenta';
            break;
        case '7': 
            name = 'Setenta';
            break;
        case '8':
            name = 'Oitenta';
            break;
        case '9':
            name = 'Noventa';
            break;    
    }

    return name;
}

function nameOfElevenToNinteen(number) {
    let name = '';
    switch(number) {
        case '11':
            name = 'Onze';
            break;
        case '12': 
            name = 'Doze';
            break;
        case '13':
            name = 'Treze';
            break;
        case '14':
            name = 'Quartoze';
            break;
        case '15':
            name = 'Quinze';
            break;
        case '16':
            name = 'Dezesseis';
            break;
        case '17': 
            name = 'Dezessete';
            break;
        case '18':
            name = 'Dezoito';
            break;
        case '19':
            name = 'Dezenove';
            break;    
    }

    return name;
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
    document.getElementById('number').value = '';
    document.getElementById('result').value = '';
}