import { service } from "../service/index.js";
import { view } from "../view/index.js"

export const FaturamentoComponent = () => {
  view.getFaturamento();

  let objetoFaturamento = [];
  service.getActivities().then(dados => {
    dados.forEach(element => {
      if (element.price != null) {
        objetoFaturamento.push(element);
      }
    });
    gerarObjetosDatas();
    gerarFaturamento();
  })

  let datasFiltradas = [];
  const gerarObjetosDatas = () => {
    const datasBrutas = [];
    objetoFaturamento.forEach(element => {
    datasBrutas.push(dataCovert(element.checkout_at));
  })
  datasFiltradas = new Set(datasBrutas);
  }

  const gerarFaturamento = () => {
    let valor = {
      contador: 0,
      total: 0
    }
    objetoFaturamento.forEach(element => {
      if (typeof element.price === 'number') {
        valor.contador++;
        valor.total += element.price;
      }
    })
    criarNovaLinha(valor);
    criarOpcoes(datasFiltradas);
  }
  const criarNovaLinha = (valor) => {
  const tabela = document.getElementById('tbody');
  const linhaNovo = document.createElement('tr');
  const dadosHtml = `
    <td id="qtd">${valor.contador}</td>
    <td id="total">${valor.total.toFixed(2)}</td>
    <td><select id="datas"></select></td>
  `;
  linhaNovo.innerHTML = dadosHtml;
  renderGrafico();
  return tabela.appendChild(linhaNovo);
}

const criarOpcoes = (datas) => {
  const tabela = document.getElementById('tbody');
  const select = document.getElementById('datas');

  datas.forEach(element => {
    const option = new Option(element, element);
    select.add(option);
  })
  tabela.addEventListener('click', (event => {
    if (event.target.id == "datas") {
      filtrarPorDatas(event);
    }
  }))
}

const filtrarPorDatas = (event) => {
    const dia = event.target.childNodes[0];
    let valor = {
        contador: 0,
        total: 0
    }
    objetoFaturamento.forEach((element) => {
        if (dataCovert(element.checkout_at) == dia) {
            valor.contador++;
            valor.total += element.price;
        }})
  atualizaHtml(valor);
}

  const atualizaHtml = (valor) => {
    document.getElementById('qtd').innerText = valor.contador;
    document.getElementById('total').innerText = `R$ ${valor.total.toFixed(2)}`;
  }
  const dataCovert = (tempo) => {
  const data = new Date(tempo).getDate();
  return data;
  }

let PieChartArray = [['Dia','Faturamento']]

const filtrarFaturamentoPorDatas = (datas) => {
  let valor = {
    contador: 0,
    total: 0
  }
  datas.forEach((elementDatas) => {
    valor.total = 0
    objetoFaturamento.forEach(element => {
        if (dataCovert(element.checkout_at) == elementDatas) {
            valor.contador++;
            valor.total += element.price;
        }
    })
    PieChartArray.push([`${elementDatas}`, +valor.total.toFixed(2)]);
    console.log(PieChartArray)
  })
}

function renderGrafico() {
  google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      filtrarFaturamentoPorDatas(datasFiltradas);
      console.log(PieChartArray)
      var data = google.visualization.arrayToDataTable(PieChartArray);

      var options = {
        is3D: true,
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
      chart.draw(data, options);
    }
  }
}