import React from 'react';
import CardData from './CardData';

function ContentRowMovie(props) {

    const movies = [
        {
            titulo: 'Movies in data base',
            cifra: 21,
            color: 'primary',
            icono: 'fa-film',
        },
        {
            titulo: 'Total awards',
            cifra: 79,
            color: 'success',
            icono: 'fa-award',
        },
        {
            titulo: 'Actors quantity',
            cifra: 79,
            color: 'warning',
            icono: 'fa-user',
        }
    ]

    return (
        <div className="row">

            {/* <!-- Movies in Data Base --> */}
            
            {
                movies.map( movie =>{
                    return <CardData key={movie.titulo}
                                    {...movie}    />
                })
            }

            {/* <!-- Total awards --> */}
            {/* <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total awards</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-award fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- Actors quantity --> */}
            {/* <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default ContentRowMovie;