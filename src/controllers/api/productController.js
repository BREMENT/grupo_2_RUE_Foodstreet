const { request, response } = require("express");
const db = require("../../database/models");

const productController = {
  getProducts: async (req = request, res = response) => {
    try {
      const pagina = Number(req.query.page) || 1;
      const paginado = pagina > 0 ? (pagina - 1) * 10 : 1; 
      let respuesta = {
        meta:{
            status: 200,
            url: "/api/products",
        },
        msg: `Ya no hay productos en la pagina ${pagina} que busca`,
        products:[]
      };
      
      const [totalProduct, products] = await Promise.all([
        db.Producto.count({ where: { estatus: 1 } }),
        db.Producto.findAll({
          where: {
            estatus: 1,
          },
          limit: 10,
          offset: paginado,
          attributes: [
            ["producto_id", "id"],
            ["nombre", "name"],
            ["descripcion", "description"],
            [
              db.Sequelize.fn(
                "concat",
                "/api/products/",
                db.Sequelize.col("producto_id")
              ),
              "detail",
            ],
          ],
          include: [
            { association: "TipoComida" },
            { association: "TipoCategoria" },
          ],
        }),
      ]);
      if (products.length >= 1 && pagina >= 0) {
        respuesta = {
          meta: {
            status: 200,
            page: pagina,
            url: "/api/products",
            total_products: totalProduct,
            total_page: products.length,
            next:
              products.length === 10 ? `/api/products/?page=${pagina + 1}` : "",
            previous: pagina > 1 ? `/api/products/?page=${pagina - 1}` : ``,
          },
          products,
        };

      }
      
      res.status(200).json(respuesta);

    } catch (err) {
      console.log(err);
      res.status(500).json({
        meta:{
          status: 500,
          url: '/api/products'
        },
        msg: err.message
      });
    }
  },
  getProduct: async(req = request, res = response) => {
    try{
      const id = Number(req.params.id);
      const [totalProduct, products] = await Promise.all([
        db.Producto.count({where:{estatus:1}}),
        db.Producto.findOne({
          where: {
            estatus: 1,
            producto_id: id
          },
          attributes: [
            ["producto_id", "id"],
            ["nombre", "name"],
            ["descripcion", "description"],
            ["precio", "price"],
            ["descuento", "discount"],
            [
              db.Sequelize.fn(
                "concat",
                "/images/products/",
                db.Sequelize.col("foto")
              ),
              "img",
            ],
          ],
          include: [
            { association: "TipoComida" },
            { association: "TipoCategoria" },
          ],
        })
      ]);

      res.status(200).json({
        meta: {
          status: 200,
          total_product: totalProduct,
          total_page: 1,
          url: `/api/products/${id}`,
        },
        products
      });
    }catch(err){
      console.log(err);
      res.status(500).json({
          meta:{
            status: 500,
            url: '/api/products'
          },
          msg: err.message
        });
    }
    
  },
};

module.exports = productController;
