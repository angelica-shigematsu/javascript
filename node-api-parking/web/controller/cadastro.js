import { postVeiculo } from "../service/index.js";
import { getCadastro } from "../view/index.js";

const formulario = document.getElementById("formulario");

export const CadastroComponent = () => {
getCadastro();
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const model = document.getElementById("modelo").value;
    const label = document.getElementById("placa").value;
    const observation = document.getElementById("observacao").value;
    const type = document.getElementById("tipo").value;
    const owner = document.getElementById("name").value;

    const cadastroCliente = {
      model,
      label,
      observation,
      type,
      owner 
    }

    postVeiculo(cadastroCliente);
  })
}