import React, { useContext } from "react";
import {MovieContext} from './MovieContext'

 const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <nav style={{display:'flex', justifyContent:'space-between'}}>
            <h1>LOGO</h1>
            <span>value 👉🏻 {movies.length}</span>
        </nav>
    )
} 

export default Nav