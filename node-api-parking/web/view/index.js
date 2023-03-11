const getCadastro = () => {
  const main = document.getElementById("root");
  const dadosHtml = `
    <form id="formulario">
      <h1>Novo Cliente</h1>
      <label for="">Nome do Cliente</label>
      <input type="text" id="name" placeholder="Digite seu nome">
      </br>
      <label for="">Modelo</label>
        <input type="text" id="modelo" placeholder="Digite o modelo do veículo">
      </br>
      <label for="">Tipo</label>
        <select type="text" id="tipo" placeholder="Digite o tipo do veículo">
          <option value="1">Carro</option>
          <option value="2">Moto</option>
        </select>
      </br>
      <label for="">Placa</label>
        <input type="text" id="placa" placeholder="Digite a placa do veículo">
      </br>
      <label for="">Observações</label>
        <input type="text" id="observacoes" placeholder="Digite a observação">
      </br>
    <div>
      <button id="cancelar" type="button">Cancelar</button>
      <button id="salvar" type="submit">Salvar</button>
    </div>
  </form>
    `
  main.innerHTML = dadosHtml;
}

const getListaClientesHtml = () => {
  const main = document.getElementById('root');
  const dadosHtml = `
    <section>
      <h1>Lista de Clientes</h1>
      <table id="tbody">
        <tr>
          <th>Cliente</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Tipo</th>
          <th>Observações</th>
          <th><a href="">Novo</a></th>
        </tr>
      </table>
    </section>
`;
  main.innerHTML = dadosHtml;
}

const getAtualizaHtml = () => {
  const main = document.getElementById("root");
  const dadosHtml = `
    <form id="formulario">
      <h1>Editar Cliente</h1>
      <label for="">Nome do Cliente</label>
      <input type="text" id="name" placeholder="Digite seu nome">
      </br>
      <label for="">Modelo</label>
        <input type="text" id="modelo" placeholder="Digite o modelo do veículo">
      </br>
      <label for="">Tipo</label>
        <select type="text" id="tipo" placeholder="Digite o tipo do veículo">
          <option value="1">Carro</option>
          <option value="2">Moto</option>
        </select>
      </br>
      <label for="">Placa</label>
        <input type="text" id="placa" placeholder="Digite a placa do veículo">
      </br>
      <label for="">Observações</label>
        <input type="text" id="observacoes" placeholder="Digite a observação">
      </br>
    <div>
      <button id="cancelar" type="button">Cancelar</button>
      <button id="salvar" type="submit">Atualizar</button>
    </div>
  </form>
    `
  main.innerHTML = dadosHtml;
}

const getCheckinHtml = () => {
  const main = document.getElementById('root');
  const dadosHtml = `
  <section>
    <h2>Lista de Clientes no Estacionamento</h2>
    </br>
    <table id="tbody" class="tabela">
      <tr>
        <th>Modelo</th>
        <th>Placa</th>
        <th>Opção</th>
      </tr>
    </table>

    <div>
      <label>Placa</label>
      <select name="input" id="select"></select>
      <a id="adicionar-novo">Adicionar Novo</a>
      </br>
      <div class="btn">
        <button id="checkin" class="btn-link">Checkin</button>
      </div>
    </div>
  </section>
`;
  main.innerHTML = dadosHtml;
}

const getCheckoutHtml = () => {
  const main = document.getElementById('root');
  const dadosHtml = `
  <section class="container">
    <h2>Dados do cliente</h2>
    </br>
    <table class="tabela">
      <tr>
        <th>Cliente</th>
        <th>Modelo</th>
        <th>Placa</th>
      </tr>
      <tr id="tbody"></tr>
    </table>
    <div>
      <label>Total de horas</label>
      <input id="totalHora"
        class="input"
        type="text"
        placeholder="Total de horas"
        disabled
      />
      <br/>
      <div>
        <label>Total de horas</label>
        <input id="valorApagar"
          class="input"
          type="text"
          placeholder="Valor a pagar"
          disabled
        />
      </div>
      <div class="btn">
        <button id="finalizar" class="btn-link">Finalizar</button>
      </div>
    </div>
  </section>
`;
  main.innerHTML = dadosHtml;
}

export const view = {
  getAtualizaHtml,
  getCadastro,
  getListaClientesHtml,
  getAtualizaHtml,
  getCheckinHtml,
  getCheckoutHtml
}