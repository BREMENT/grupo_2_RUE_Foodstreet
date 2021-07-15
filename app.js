const express = require('express');
const app = express();
const userRouter = require('./routes/user.js');
const productoRouter = require('./routes/producto.js');
const restauranteRouter = require('./routes/restaurante.js');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.use('/productos', productoRouter);
app.use('/restaurantes', restauranteRouter);

app.get('/', (req, res)=>{
    res.render('inicio');
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} `);
});