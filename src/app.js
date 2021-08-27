const path = require('path');
const methodOverride = require('method-override');
const express = require('express');
const app = express();

// rutas
const userRouter = require('./routes/usersRoutes');
const productoRouter = require('./routes/productRoutes.js');
const restauranteRouter = require('./routes/restaurante.js');
const carritoRouter = require('./routes/carrito.js');
const indexRouter = require('./routes/index.js');

const PORT = process.env.PORT || 8080;

app.use(express.static( path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));

app.use('/user', userRouter);
app.use('/productos', productoRouter);
app.use('/restaurantes', restauranteRouter);
app.use(carritoRouter);
app.use(indexRouter);


app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} `);
});