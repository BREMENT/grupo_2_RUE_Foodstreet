const express = require('express');
const app = express();

// rutas
const userRouter = require('./routes/users.js');
const productoRouter = require('./routes/producto.js');
const restauranteRouter = require('./routes/restaurante.js');
const carritoRouter = require('./routes/carrito.js');
const indexRouter = require('./routes/index.js');

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.use('/productos', productoRouter);
app.use('/restaurantes', restauranteRouter);
app.use(carritoRouter);
app.use(indexRouter);


app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} `);
});