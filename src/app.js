require('dotenv').config();
const path = require('path');
const methodOverride = require('method-override');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const adminLoggedMiddleware = require('./middlewares/adminLoggedMiddleware');
// rutas
const userRouter = require('./routes/usersRoutes');
const productoRouter = require('./routes/productRoutes.js');
const restauranteRouter = require('./routes/restaurante.js');
const carritoRouter = require('./routes/carrito.js');
const indexRouter = require('./routes/index.js');

// Ruta Api
const apiRouter = require('./routes/api');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.static( path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());
app.use(adminLoggedMiddleware);


app.use('/user', userRouter);
app.use('/productos', productoRouter);
app.use('/restaurantes', restauranteRouter);
app.use(carritoRouter);
app.use(indexRouter);
app.use(apiRouter);

//handling errors
app.use((req, res, next)=>{
    res.status(404).render('404-not-found');
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} `);
});