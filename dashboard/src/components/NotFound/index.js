import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function NotFound(props) {
    
    const location = useLocation();
    console.log(location);
    
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>Error 404 not found rute {location.pathname}</h1>
        </div>
    );
}

export default NotFound;