import React from 'react';
// import PropTypes from 'prop-types';

function ChartRow({id,nombre, descripcion, detalle, categorias,}) {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{detalle}</td>
            <td>
                <ul>
                    {categorias.map((category) =>
                        <li key={id}>{category}</li>
                    )}
                </ul>
            </td>
        </tr>
    );
}

// ChartRow.propTypes = {
//     title: PropTypes.string,
//     length: PropTypes.string,
//     rating: PropTypes.string,
//     categories: PropTypes.array,
//     awards: PropTypes.number
// }


// ChartRow.defaultProps = {
//     title: 'default',
//     length: 0,
//     rating: 0,
//     categories: ['Drama','Acción','Comedia'],
//     awards: 0
// }

export default ChartRow;