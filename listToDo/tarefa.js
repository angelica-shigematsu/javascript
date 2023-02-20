let arr = [];

function addTask() {
  let tarefa = document.getElementById("tarefa").value;

  if (!tarefa) {
    isEmpty();
  } else {
    let insertSameTask = arr.find(value => value.toLowerCase() === tarefa.toLowerCase());
    if (insertSameTask) {
      document.getElementById("lista").innerHTML += 
        'Já existe a tarefa ' + tarefa;
    } else {
      arr.push(tarefa);
      cleanInput();
      listTask(arr);
    }
  }
}

function removeTask() {
  let tarefa = document.getElementById("tarefa").value;

  if (!tarefa) {
    isEmpty();
  }
  else{
    arr = arr.filter(value => value !== tarefa);
    cleanInput();
    listTask(arr);
  }
}

function isEmpty() {
  document.getElementById("lista").innerHTML += 
  'O campo vazio';
}

function cleanInput() {
  document.getElementById("tarefa").value = '' ;
  document.getElementById("lista").innerHTML = '';
}

function listTask(arr) {
  for (let index= 0; index < arr.length; index++) {
    document.getElementById("lista").innerHTML += 
       arr[index] + '</br>';
  }
}