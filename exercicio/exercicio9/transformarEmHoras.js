function modificarEmHoras() {
  let horas = null;
  let totalSegundos = document.getElementById('segundos').value;

  horas = Math.floor(totalSegundos / 3600);
  minutos = Math.floor((totalSegundos % 3600) / 60);
  segundos = totalSegundos % 60;

  document.getElementById('horas').value = `${horas}:${minutos}:${segundos}`;
}

function limparCampos() {
  document.getElementById('segundos').value = '';
  document.getElementById('horas').value = '';
}