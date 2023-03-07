const url =  'http://localhost:3000/api';

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

const putVeiculo = (objetoCliente, id) => {
  return fetch(`${url}/vehicles/${id}`, {
  method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objetoCliente)
  }
  ).then((response) => {
      if(response.status != 200) {
        console.log("Error: ${response.status}");
      } else {
        response.json();
      }
  })
}

const deletarVeiculo = (id) => {
  return fetch(`${url}/vehicles/${id}`, {
    method: "DELETE",
  }).then((response) => {
      if(response.status != 200) {
        console.log("Error: ${response.status}");
      } else {
        return response.json();
      }
  })
}

export const service = {
  postVeiculo,
  getVeiculo,
  putVeiculo,
  deletarVeiculo
}