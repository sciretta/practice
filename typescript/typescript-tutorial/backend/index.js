const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('fronted/public'));

app.set('port',4000);

app.listen(app.get('port'),()=>{
  console.log(`Servidor inicializado en el puerto ${app.get('port')}.`);
});
