import React from 'react';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';

function ConterRowCenter(props) {
    return (
        <div className="row">
            <LastMovieInDb />
            <GenresInDb />
        </div>
    );
}

export default ConterRowCenter;