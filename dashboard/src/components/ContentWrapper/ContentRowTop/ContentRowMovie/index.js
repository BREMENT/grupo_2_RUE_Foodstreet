import React, {useEffect, useState} from 'react';
import CardData from './CardData';

function ContentRowMovie(props) {
    
    const [cardsTotal, setCardsTotal] = useState([]); 

    useEffect(()=>{
        peticion();           
    }, []);

    useEffect(()=>{
        return ()=>console.error('Se desmonto el componente');
    }, []);

    const peticion = async() =>{
        const [
            products,
            users,
            foods,
            categories
        ] = await Promise.all([
            fetch('http://localhost:8080/api/products/').then( resp => resp.json() ),
            fetch('http://localhost:8080/api/users/').then( resp => resp.json() ),
            fetch('http://localhost:8080/api/foods/').then( resp => resp.json() ),
            fetch('http://localhost:8080/api/categories/').then( resp => resp.json() ),
        ]);

        const arrayTotal = [
            {
                titulo: 'Productos total',
                cifra: products.meta.total_products,
                color: 'primary',
                icono: 'fa-hamburger'
            },
            {
                titulo: 'Usuarios total',
                cifra: users.meta.total_users,
                color: 'success',
                icono: 'fa-users'
            },
            {
                titulo: 'Comidas total',
                cifra: foods.meta.total_foods,
                color: 'warning',
                icono: 'fa-drumstick-bite'
            },
            {
                titulo: 'Categoria total',
                cifra: categories.meta.total_categories,
                color: 'danger',
                icono: 'fa-cogs'
            }
        ];
        
        setCardsTotal(arrayTotal);
    }


    return (
        <div className="row">

            {/* <!-- Movies in Data Base --> */}
            
            {
                cardsTotal.map( card =>{
                    return <CardData 
                                    key={card.titulo}
                                    {...card}    
                            />
                })
            }

        </div>
    );
}

export default ContentRowMovie;