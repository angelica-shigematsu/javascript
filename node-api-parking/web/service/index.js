const url =  'http://localhost:3000/api';

export const postVeiculo = (objetoCliente) => {
  console.log(objetoCliente);
  return fetch(url +  "/vehicles", {
  method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objetoCliente)
  }).then((response) => {
      if(response.status != 200) {
        console.log("Error: ${response.status}");
      } else {
        alert(`Sucesso ao salvar: ${response.status}`)
      }
  })
}