import React, {useEffect, useState } from 'react';
import mandalorian from '../../../../../assets/images/mandalorian.jpg';

function LastMovieInDb(props) {

    const [ product, setProduct ] = useState({});

    const peticion = async() => {
        const products = await fetch('http://localhost:8080/api/products/').then(resp => resp.json());
        console.log(products.meta.total_products);
        const last_products = await fetch(`http://localhost:8080/api/products/${products.meta.total_products}`)
                                    .then(resp => resp.json());
        console.log(last_products);
        await setProduct(last_products.products);
    }
    
    useEffect(()=>{
        peticion();
    },[]);

    useEffect(()=>{
        return ()=>console.error('Se desmonto el componente');
    }, [])
    

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ "width": "40rem" }}
                            src={`http://localhost:8080/${product.img}`}
                            alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>
                        {product.description}
                    </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    );
}

export default LastMovieInDb;