const productoController = {
    detalle: (req, res)=>{
        res.render('detalleProducto');
    },
    create: (req, res)=>{
        res.send('formulario-creacion');
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