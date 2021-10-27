import React from 'react';
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
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
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