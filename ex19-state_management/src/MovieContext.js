import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] =useState([
        {
            name: 'Harry Potter', 
            price: '$10',
            id: 24321
        },
        {
            name: 'Parasite', 
            price: '$15',
            id: 24322
        },{
            name: 'Inception', 
            price: '$12',
            id: 24323
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {/* or we can do <Nav/><MovieList/> */}
            {props.children}            
        </MovieContext.Provider>
    )
}