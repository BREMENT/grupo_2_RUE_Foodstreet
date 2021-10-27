import React, {useEffect, useState}from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        title: 'Billy Elliot ',
        length: '123',
        rating: '5',
        categories: ['Drama','Comedia'],
        awards: 2
    },
    {
        title: 'Alicia en el país de las maravillas',
        length: '142',
        rating: '4.8',
        categories: ['Drama','Acción','Comedia'],
        awards: 3
    },
    
]

function Chart(props) {

    const [products, setProduct] = useState([]);

    const peticion = async() =>{
        const resp = await fetch('http://localhost:8080/api/products/').then(resp=>resp.json());
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
        console.log(producto);
        setProduct(producto);
    }


    useEffect(()=>{
        peticion();
    },[]);

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Detalle url</th>
                                <th>Categorias</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Detalle url</th>
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
        </div>
    );
}

export default Chart;