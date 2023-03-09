import { CadastroComponent } from "./controller/cadastro.js";
import { ListaClienteComponent } from "./controller/list-Clientes.js";

const link = document.getElementById('link');

link.addEventListener('click', (event) => {
  const option = event.target.childNodes[0].data;

  switch (option) {
    case "Cadastro": 
      CadastroComponent();
      break;
    case "Clientes": 
    ListaClienteComponent();
      break;
    case "Checkin": {
      window.location.href = "./checkin.html";
      break;
    }
  }
})