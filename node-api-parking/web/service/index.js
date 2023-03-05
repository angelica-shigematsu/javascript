const url =  'http://localhost:4000/api';

const postVeiculo = (objetoCliente) => {
  return fetch(url +  "/vehicles", {
  method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objetoCliente)
  }
  ).then((response) => {
      if(response.status != 200) {
        console.log("Error: ${response.status}");
      } else {
        alert(`Sucesso ao salvar: ${response.status}`)
      }
  })
}

const getVeiculo = () => {
  return fetch(url +  "/vehicles",
    ).then((response) => {
        if(response.status != 200) {
          console.log("Error: ${response.status}");
        } else {
          return response.json();
        }
    })
}

export const service = {
  postVeiculo,
  getVeiculo
}