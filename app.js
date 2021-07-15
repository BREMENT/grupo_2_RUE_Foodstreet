const express = require('express');
const app = express();
const userRouter = require('./routes/user.js');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.get('/', (req, res)=>{
    res.render('inicio');
});

// app.get('/restaurante', (req, res) => {
//     res.sendFile(__dirname + '/views/detalleRestaurante.html');
// });

// app.get('/producto', (req, res) => {
//     res.sendFile(__dirname + '/views/detalleProducto.html');
// });

// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/views/login.html');
// });

// app.get('/registro', (req, res) => {
//     res.sendFile(__dirname + '/views/registro.html');
// });

app.listen(3000, () => {
    console.log('Servidor funcionando');
});