const express = require('express');
const app = express();
const userRouter = require('./routes/user.js');
const productoRouter = require('./routes/producto.js');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.use('/productos', productoRouter);

app.get('/', (req, res)=>{
    res.render('inicio');
});

app.listen(3000, () => {
    console.log('Servidor funcionando');
});