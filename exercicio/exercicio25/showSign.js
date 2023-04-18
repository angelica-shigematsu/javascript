const corVermelho = '#D3616C';
const sign = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']

function showSign() {
  let mensagemHtml = document.getElementsByClassName('mensagem');
  let result = '';

  printMessage(mensagemHtml,"");

  let day = Number(document.getElementById('day').value);
  let month = Number(document.getElementById('month').value);

  if (isNotValidate(day, month)) return printMessage(mensagemHtml,"Informações inválidas");

  result = getSign(day, month);

  document.getElementById('result').value = result;
}

function isNotValidate(day, month) {
  if(day == "" || month == "") return true;

  if(month < 0 || month > 13) return true;

  if(day < 0 || day > 31) return true;

  return false;
}

function getSign(day, month) {

  let isBetween19And31 =  day >= 19 && day <= 31 ;
  let isBetween21And31 = day >= 21 && day <= 31;
  let isBetween22And31 = day >= 22 && day <= 31;
  let isBetween23And31 = day >= 23 && day <= 31;

  let isBetween1And18 =  day >= 1 && day <= 18;
  let isBetween1And20 = day >= 1 && day <=20;
  let isBetween1And21 =  day >= 1 && day <= 21;
  let isBetween1And22 = day >= 1 && day <= 22;

  console.log((month == 8 && isBetween23And31) || (month == 9 &&  isBetween1And22))

  //Áries: de 21 de março a 20 de abril;
  if((month == 3 && (day >= 21 && day <= 31)) || (month == 4 && isBetween1And20)) {
    return sign[0]
  } 
  //Touro: de 21 de abril a 20 de maio;
  if((month == 4 && (day > 21 && day <= 31)) || (month == 5 && isBetween1And20)) {
    return sign[1];
  }

  // Gêmeos: de 21 de maio a 20 de junho;
  if((month == 5 && isBetween21And31) || (month == 6 && isBetween1And21)) {
    return sign[2];
  }

  // Câncer: de 21 de junho a 22 de julho;
  if((month == 6 && isBetween21And31) || (month == 7 && isBetween1And22)) {
    return sign[3];
  }
    // Leão: de 23 de julho a 22 de agosto;
  if((month == 7 && isBetween23And31) || (month == 8 && isBetween1And22)) {
    return sign[4];
  }

   // Virgem: de 23 de agosto a 22 de setembro;
  if((month == 8 && isBetween23And31) || (month == 9 &&  isBetween1And22)) {
    return sign[5];
  }

   // Libra: de 23 de setembro a 22 de outubro;
  if((month == 9 && isBetween23And31) || (month == 10 && isBetween1And22)) {
    return sign[6];
  }

  // Escorpião: de 23 de outubro a 21 de novembro;
  if((month == 10 && isBetween23And31) || (month == 11 && isBetween1And21)) {
    return sign[7];
  }

  // Sagitário: de 22 de novembro a 21 de dezembro;
  if((month == 11 && isBetween22And31) || (month == 12 && isBetween1And21)) {
    return sign[8];
  }

  // Capricórnio: de 22 de dezembro a 20 de janeiro;
  if((month == 12 && isBetween22And31) || (month == 1 && isBetween1And20)) {
    return sign[9];
  }
  // Aquário: de 21 de janeiro a 18 de fevereiro;
  if((month == 12 && isBetween21And31) || (month == 1 && isBetween1And18)) {
    return sign[10];
  }
  
  // Peixes: de 19 de fevereiro a 20 de março;
  if((month == 12 && isBetween19And31) || (month == 1 && isBetween1And20)) {
    return sign[11];
  }
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
  return document.getElementsByClassName('mensagem')[0].innerHTML = mensagem;
}

function cleanFields() {
  document.getElementById('day').value = '';
  document.getElementById('month').value = '';
  document.getElementById('result').value = '';
}