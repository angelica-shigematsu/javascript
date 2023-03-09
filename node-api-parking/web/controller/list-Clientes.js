import { service } from "../service/index.js";
import { view } from "../view/index.js";
import { AtualizaComponent } from "./atualiza.js";

export const ListaClienteComponent = () => {
  view.getListaClientesHtml();

 service.getVeiculo().then(dados => {
  dados.forEach(element => {
    if (element.owner != null && element.label != null) {
      criarNovaLinha(element.id, element.owner, element.model, element.label, element.type, element.observation);
    }
  })
 })

 const table = document.getElementById('tbody')

 table.addEventListener('click', (event) => {
  const button = event.target.childNodes[0].data;
  const id = event.target.id;
  
  if(button === "Editar") {
    view.getAtualizaHtml();
    AtualizaComponent(id);
  }

  if(button === "Excluir") {
    deletar(id);
  }

  if(button === 'Novo') console.log(button);
  })
}

const criarNovaLinha = (id, cliente, modelo, placa, tipo, observacoes) => {
  const table = document.getElementById('tbody')
  const NovaLinha = document.createElement('tr')

  const dadosHtml = `
  <td class="none">${cliente}</td>  
  <td>${placa}</td>
  <td>${modelo}</td>
  <td>${tipo}</td>
  <td>${observacoes}</td>
  <td>
    <div class="lista-btn">
      <a id="${id}" class="btn-link editar">Editar</a>
      <a id="${id}" class="btn-link" type="button">Excluir</a>
    </div>
  </td>
  `
  NovaLinha.innerHTML = dadosHtml;
  return table.appendChild(NovaLinha);
}

const deletar = (id) => {
  service.deletarVeiculo(id).then(() => {
    ListaClienteComponent();
  })
}