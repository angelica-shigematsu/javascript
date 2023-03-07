import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const CadastroComponent = () => {
  view.getCadastro();
  const formulario = document.getElementById("formulario");
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const model = document.getElementById("modelo").value;
      const label = document.getElementById("placa").value;
      const observation = document.getElementById("observacoes").value;
      const type = document.getElementById("tipo").value;
      const owner = document.getElementById("name").value;

      const cadastroCliente = {
        model,
        label,
        observation,
        type,
        owner 
      }
      service.postVeiculo(cadastroCliente);
  });
}
