import React from 'react';
import { useState, useEffect, useRef } from 'react';
// import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies() {

	const keyword = useRef();
	// Credenciales de API
	const url = 'http://localhost:8080';

	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch(`${url}/api/products/busqueda?search=${search}`)
			.then(resp => resp.json())
			.then(data => {
				console.log(data.products);
				setProducts(data.products);

			});
		console.log('se monto el componente');
	}, []);

	useEffect(() => {
		console.warn('se actualizo el componente');
	}, [products]);

	useEffect(() => {
		return () => console.error('Se desmonto el componente');
	}, [])

	const searchMovies = async (e) => {
		e.preventDefault();
		// console.log(keyword.current.value);
		const busqueda = keyword.current.value;
		setSearch(busqueda);

		fetch(`${url}/api/products/busqueda?search=${busqueda}`)
			.then(resp => resp.json())
			.then(data => {
				console.log(data.products);
				if (data.products) {
					setProducts(data.products);
				} else {
					setProducts([]);
				}
			})
	}

	return (
		<div className="container-fluid">


			<div className="row my-4">
				<div className="col-12 col-md-6">
					{/* Buscador */}
					<form method="GET" onSubmit={searchMovies}>
						<div className="form-group">
							<label htmlFor="">Buscar por título:</label>
							<input ref={keyword} type="text" className="form-control" />
						</div>
						<button className="btn btn-info">Search</button>
					</form>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<h2>Producto para la palabra: {search}</h2>
				</div>
				{/* Listado de películas */}
				{
					products.length > 0 && products.map((product, i) => {
						return (
							<div className="col-sm-6 col-md-3 my-4" key={i}>
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img
												className="img-fluid px-3 px-sm-4 mt-3 mb-4"
												src={`${url}${product.img}`}
												alt={product.name}
												style={{ width: '90%', height: '400px', objectFit: 'cover' }}
											/>
										</div>
										<p>precio: $ {product.price}</p>
										<p>descuento: {product.discount}%</p>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
			{products.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}


		</div>
	)
}

export default SearchMovies;
