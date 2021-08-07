const productoController = {
    detalle: (req, res)=>{
        res.render('detalleProducto');
    },
    products: (req, res)=>{
        res.render('products');
    },
    create: (req, res)=>{
        res.render('product-create-form');
    },
    store: (req, res)=>{
        res.send('datos del formulario');
    },
    edit: (req, res)=>{
        res.send('formulario-editar');
    },
    update: (req, res)=>{
        res.send('datos del formulario');
    }

};

module.exports = productoController;