import React , {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

function AddMovie() {

    const [name,SetName] = useState('');
    const [price,SetPrice] = useState('');
    const [movies,SetMovies]  = useContext(MovieContext)

    const updateName = (e) => {
        SetName(e.target.value)
    }

    const updatePrice = (e) => {
        SetPrice(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault();
        SetMovies( (previousMovies => [...previousMovies, {name, price}]))

    }

    return (
        <div>
            <form onSubmit={addMovie}>
                <input type='text' name='name' value={name} onChange={updateName} />
                <input type='text' name='price' value={price} onChange={updatePrice} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddMovie
