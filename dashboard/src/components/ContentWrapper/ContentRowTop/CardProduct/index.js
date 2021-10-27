import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CardProduct(props) {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const peticion = async () => {
        const producto = await fetch(`http://localhost:8080/api/products/${id}`).then(resp => resp.json());
        console.log(producto.products);
        setProduct(producto.products);
    }

    useEffect(() => {
        peticion();
    }, []);

    useEffect(()=>{
        return ()=>console.error('Se desmonto el componente');
    },[])

    return (
       <div className="d-flex justify-content-center">
        <div className="col-lg-8 mb-4">
            <div className="card mb-3">
                <h5 className="card-header">{(product.TipoComida)?product.TipoComida.descripcion : ''}</h5>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ "width": "40rem" }}
                            src={`http://localhost:8080${product.img}`}
                            alt=" Star Wars - Mandalorian " />
                    </div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                        <small className="text-muted">precio: ${product.price} </small>
                        <small className="text-muted">descuento: {product.discount}% </small>
                    </p>
                </div>
            </div>
        </div>
       </div>
    );
}

export default CardProduct;