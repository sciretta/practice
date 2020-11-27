const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

app.set('port',4000);

app.listen(app.get('port'),()=>{
    console.log('servidor inicializado');
});

module.exports = {app,router};
