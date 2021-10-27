import React from 'react';
import PropTypes from 'prop-types';

function Genres({ titulo, total }) {
    return (

        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            {titulo}
                        </div>
                        <div>
                            {total}
                        </div>
                    </div>
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