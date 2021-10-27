import React, {useEffect, useState} from 'react';
import Genres from './Genres';

function GenresInDb(props) {
    
    const [foods, setFood] = useState([]);

    const peticion = async() =>{
        const food = await fetch('http://localhost:8080/api/foods')
                            .then(resp => resp.json());
        console.log(food);
        setFood(food.foods)
    }

    useEffect(()=>{
        peticion();
    }, []);

    useEffect(()=>{
        return ()=>console.error('Se desmonto el componente');
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            foods.map(food=> <Genres 
                                key={food.tipo_comida_id} 
                                titulo={food.descripcion}
                                total={food.TipoComida_producto.length} 
                            />)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresInDb;