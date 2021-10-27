import React, {useEffect, useState}from 'react';
import ChartRow from './ChartRow';


function Chart(props) {

    const [products, setProduct] = useState([]);
    const [meta, setMeta] = useState({});
    const url = 'http://localhost:8080';

    const peticion = async(endpoint) =>{
        const resp = await fetch(`${url}${endpoint}`).then(resp=>resp.json());
        const producto = resp.products.map(product =>{
            return {
                id: product.id,
                nombre: product.name,
                descripcion: product.description,
                detalle: product.detail,
                categorias: [
                    product.TipoComida.descripcion,
                    product.TipoCategoria.descripcion
                ]
            }
        })
        console.log(resp);
        setProduct(producto);
        setMeta(resp.meta);
    }


    useEffect(()=>{
        peticion('/api/products/');
    },[]);


    const siguiente = (e) =>{
        console.log(e);
        peticion(e.target.value);
    }

    const anterior = (e) =>{
        console.log(e);
        peticion(e.target.value);
    }

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Detalle</th>
                                <th>Categorias</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Detalle</th>
                                <th>Categorias</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( (product) => {
                                return <ChartRow { ...product} key={product.id}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className={(meta.previous)?`m-3 d-flex justify-content-between`:'m-3 d-flex justify-content-end'}>
                {
                    meta.previous &&
                    <button onClick={anterior}
                            value={meta.previous}
                            className="btn btn-primary">Anterior</button>
                }

                {
                    meta.next &&
                    <button onClick={siguiente}
                            value={meta.next}
                            className="btn btn-primary">Siguiente</button>
                }
                
            </div>
        </div>
    );
}

export default Chart;