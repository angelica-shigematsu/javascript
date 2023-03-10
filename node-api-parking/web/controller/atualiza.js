import { service } from "../service/index.js";
import { ListaClienteComponent } from "./list-Clientes.js";

const labelVehicle = []
export const AtualizaComponent = (idParametro) => {
  const vehicle = (label) => {
    service.getVeiculo().then(dados => {
      dados.forEach(element => {
        if (element.label != null && element.label != label) {
          labelVehicle.push(element.label);
        }
      })
    })
  }
  
  service.getVeiculo().then(dados => {
    dados.forEach(element => {
      if (element.id == idParametro) {
        adicionaParametroNoInput(element);
      }
    })
  })

  const formulario = document.getElementById("formulario");
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const model = document.getElementById("modelo").value;
      const label = document.getElementById("placa").value;
      const observation = document.getElementById("observacoes").value;
      const type = document.getElementById("tipo").value;
      const owner = document.getElementById("name").value;

      vehicle(label);
      const atualizaCliente = {
        model,
        label,
        observation,
        type,
        owner 
      }

      if (labelVehicle.includes(atualizaCliente.label)) {
        return alert(`Existe carro com essa placa: ${atualizaCliente.label}`);
      } else {
        service.putVeiculo(atualizaCliente, idParametro).then(() => {
          cancelar();
          ListaClienteComponent();
        });
      }
  });

}

const adicionaParametroNoInput = (objeto) => {
  document.getElementById("modelo").value = objeto.model;
  document.getElementById("placa").value = objeto.label;
  document.getElementById("observacoes").value = objeto.observation;
  document.getElementById("tipo").value = objeto.type;
  document.getElementById("name").value = objeto.owner;
} 

const cancelar = () => {
  const formulario = document.getElementById("formulario");
  formulario.reset();
}