import React, { useState, useContext } from "react"
import {MovieContext} from './MovieContext'

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const addMovie = (e) => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, price: price}]) // make copy of movies list and add another object
  }

  return (
    <form>
      <input type="text" name="name" id="" value={name} onChange={updateName} />
      <input
        type="text"
        name="price"
        id=""
        value={price}
        onChange={updatePrice}
      />
      <button onClick={addMovie}>Submit</button>
    </form>
  );
};


export default AddMovie;