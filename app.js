let express = require('express');

let app = express ();

app.listen(3000,()=> console.log("Esto fue exitoso"));

app.get('/', function(req, res){ res.send("Bienvenidos al sitio modafackas");
});

app.get('/contacto', function(req,res){
    res.send("Dejanos tu contacto!");
});

app.get('/un-array', function(req,res){
    res.send([1,2,3]);
});

app.get('/un-objeto', function(req,res){
    res.send({name:"Brenda"});
});