import express from 'express';
import { addCheckin, 
          addCheckout, 
          listActivivities, 
          removeActivity } 
          from './controllers/activitiesController.js';
import { alterVehicle, createVehicle, 
        listVehicles, 
        removeVehicle} 
        from './controllers/vehiclesController.js';

const app = express();

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*");// dentro do '*' poderia ser qual site poderia fazer a requisiçao.

  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");

  next();

})

app.use(express.json());

app.get('/api/vehicles', listVehicles);

app.post('/api/vehicles', createVehicle); 

app.put('/api/vehicles/:id', alterVehicle) ;


app.delete('/api/vehicles/:id', removeVehicle);

app.get('/api/activities', listActivivities);
  
app.post('/api/activities/:id', addCheckin);

app.put('/api/activities/:id', addCheckout);

app.delete('/api/activities/:id', removeActivity);

app.listen(3000, () =>{
  console.log('Servidor funcionando');
})