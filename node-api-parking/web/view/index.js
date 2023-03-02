export const getCadastro = () => {
  const main = document.getElementById("root");
  const dadosHtml = `
    <form id="formulario">
      <h1>Novo Cliente</h1>
      <label for="">Nome do Cliente</label>
      <input type="text" id="name" placeholder="Digite seu nome" required>
      </br>
      <label for="">Modelo</label>
        <input type="text" id="modelo" placeholder="Digite o modelo do veículo" required>
      </br>
      <label for="">Tipo</label>
        <select type="text" id="tipo" aria-placeholder="Digite o tipo do veículo">
          <option value="1">Carro</option>
          <option value="2">Moto</option>
        </select>
      </br>
      <label for="">Placa</label>
        <input type="text" id="placa" placeholder="Digite a placa do veículo" required>
      </br>
      <label for="">Observações</label>
        <input type="text" id="observacao" placeholder="Digite a observação" required>
      </br>
    <div>
      <button id="cancelar" type="button">Cancelar</button>
      <button id="salvar" type="submit">Salvar</button>
    </div>
  </form>
    `
  main.innerHTML = dadosHtml;
}

// const getListaClientesHtml = () => {

//   const main = document.getElementById('root');
//   const dadosHtml = `
//     <section>
//       <h1>Lista de Clientes</h1>
//       <table>
//         <tr>
//           <th>Cliente</th>
//           <th>Modelo</th>
//           <th>Placa</th>
//           <th>Tipo</th>
//           <th>Observações</th>
//           <th><a href="">Novo</a></th>
//         </tr>
//       </table>
//     </section>
// `;
//   main.innerHTML = dadosHtml;
// }