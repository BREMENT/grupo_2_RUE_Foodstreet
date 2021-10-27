import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ChartRow({id,nombre, descripcion, detalle, categorias,}) {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>
                <Link to={`/product/${id}`}>
                    <button className="btn btn-info">
                        Ver más
                    </button>
                </Link>
            </td>
            <td>
                <ul>
                    {categorias.map((category,i) =>
                        <li key={i}>{category}</li>
                    )}
                </ul>
            </td>
        </tr>
    );
}

ChartRow.propTypes = {
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    detalle: PropTypes.string,
    categorias: PropTypes.array
}


ChartRow.defaultProps = {
    nombre: 'default',
    descripcion: 'default',
    detalle: 'default',
    categories: ['default','default','default']
}

export default ChartRow;