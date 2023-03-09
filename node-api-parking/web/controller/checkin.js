import { service } from "../service/index.js"
import { view } from "../view/index.js"

view.getCheckinHtml();

let idCheckin = [];
service.getActivities().then((dados) => {
  dados.forEach((element) => {
    if (element != null) {
      idCheckin.push(element.vehicle_id);
    }
  });
  getVeiculo();
});

const arrayVeiculo = [];
const getVeiculo = () => {
  service.getVeiculo().then(dados => {
    dados.forEach(element => {
      if (idCheckin.includes(element.id)) {
        criarNovaLinha(element);
      }
      if(element.label != null) {
        arrayVeiculo.push(element);
      }
    })
    criarAsOpcoes(arrayVeiculo);
  })
}

const criarNovaLinha = (object) => {
  const table = document.getElementById('tbody')
  const NovaLinha = document.createElement('tr')

  const dadosHtml = `
  <td>${object.model}</td>
  <td>${object.label}</td>
  <td>
    <a id="${object.id}" class="btn-link">Checkout</a>
  </td>
  `
  NovaLinha.innerHTML = dadosHtml;

  return table.appendChild(NovaLinha);
}

const criarAsOpcoes = (arrayVeiculo) => {
  const veiculosFiltrados = [];

  arrayVeiculo.forEach(element => {
    idCheckin.includes(element.id) ?
     console.log("Já está estacionado") : 
     veiculosFiltrados.push(element);
  })

  const select = document.getElementById('select');
  veiculosFiltrados.forEach(element => {
    const option = new Option(element.label, element.id);
    select.add(option);

  const main = document.getElementById('root');

  main.addEventListener('click', (event) => {
    const button = event.target.childNodes[0].data;
    const id = event.target.id;
    
    if(button === "Checkout") {

   
    }

    if(button === "Checkin") {
      const select = document.getElementById('select');;
      searchID(select.value);
    }

    if(button === 'Adicionar Novo') console.log(button);
    })
  })
}

const searchID = (id) => {
  service.getVeiculo().then(dados => {
    dados.forEach(element => {
      if (element.id == id) { 
        checkinApi(element);
      }
    })
  })
};

const checkinApi = (objeto) => {
  service.postCheckin(objeto.label).then((dados) => {
    alert(dados.message);
    window.location.reload();
  });
}

