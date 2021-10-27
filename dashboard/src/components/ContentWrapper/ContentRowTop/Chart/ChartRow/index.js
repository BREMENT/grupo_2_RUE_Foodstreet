import React from 'react';
import PropTypes from 'prop-types';

function ChartRow({title, length, rating, categories, awards}) {
    return (
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {categories.map((category, i) =>
                        <li key={`category ${i}`}>{category}</li>
                    )}
                </ul>
            </td>
            <td>{awards}</td>
        </tr>
    );
}

ChartRow.propTypes = {
    title: PropTypes.string,
    length: PropTypes.string,
    rating: PropTypes.string,
    categories: PropTypes.array,
    awards: PropTypes.number
}


ChartRow.defaultProps = {
    title: 'default',
    length: 0,
    rating: 0,
    categories: ['Drama','Acción','Comedia'],
    awards: 0
}

export default ChartRow;