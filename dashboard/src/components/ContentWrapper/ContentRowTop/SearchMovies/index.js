import React from 'react';
import { useState, useEffect, useRef } from 'react';
// import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){

    const keyword = useRef();
	// Credenciales de API
	const apiKey = 'ba4aba79'; // Intenta poner cualquier cosa antes para probar


    const [ movies, setMovies ] = useState([]);
    const [ search, setSearch ] = useState('spider');

	useEffect(()=>{
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.Search);
				setMovies(data.Search);
				
            });
        console.log('se monto el componente');
    },[]);
    
    useEffect(()=>{
        console.warn('se actualizo el componente');
    },[movies]);

	useEffect(()=>{
		return ()=>console.error('Se desmonto el componente');
	},[])

	const searchMovies = async(e) =>{
        e.preventDefault();
        // console.log(keyword.current.value);
        const busqueda = keyword.current.value;
        setSearch(busqueda);
        
        fetch(`https://www.omdbapi.com/?s=${busqueda}&apikey=${apiKey}`)
        .then(resp => resp.json())
        .then(data =>{
            console.log(data.Search);
			if( data.Search){
				setMovies(data.Search);
			}else{
				setMovies([]);
			}
        })
    }

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
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
							<h2>Películas para la palabra: {search}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
