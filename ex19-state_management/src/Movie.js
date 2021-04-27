
import React from 'react';

const Movie = ({name, price, id}) => {
    return (
        <div> 
            <h1 key={id}>{name}</h1>
            <span>{price}</span>
        </div>
    )
}

export default Movie;