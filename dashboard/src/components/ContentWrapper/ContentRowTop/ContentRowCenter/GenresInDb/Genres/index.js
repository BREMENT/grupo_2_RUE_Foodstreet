import React from 'react';
import PropTypes from 'prop-types';

function Genres({ titulo }) {
    return (

        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {titulo}
                </div>
            </div>
        </div>


    );
}

Genres.propTypes = {
    titulo: PropTypes.string
}

Genres.defaultProps = {
    titulo: 'default'
}

export default Genres;