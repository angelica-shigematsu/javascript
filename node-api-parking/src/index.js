import express from 'express';
import { addCheckin, 
          createActivities, 
          listActivivities, 
          removeActivity } 
          from './controllers/activitiesController.js';
import { alterVehicle, createVehicle, 
        listVehicles, 
        removeVehicle} 
        from './controllers/vehiclesController.js';

const app = express();

app.use(express.json());

app.get('/api/vehicles', listVehicles);

app.post('/api/vehicles', createVehicle); 

app.put('/api/vehicles/:id', alterVehicle) ;


app.delete('/api/vehicles/:id', removeVehicle);

app.get('/api/activities', listActivivities);
  
app.post('/api/activities/:id', createActivities);

app.put('/api/activies/:id', addCheckin);

app.delete('/api/activities/:id', removeActivity);

app.listen(3000, () =>{
  console.log('Servidor funcionando');
})