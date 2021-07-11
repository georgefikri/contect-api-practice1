import React, {useState, createContext} from 'react'

// to be used where i want to consume the data
export const MovieContext  = createContext()

// to be used at App.js
export const  MovieProvider = ({
    children
}) => {
    const [movies,SetMovies] = useState([
        {
            name: "harry potter",
            price: "$10",
            id:1
        },
        {
            name: "GOT",
            price: "$10",
            id:2
        },
        {
            name: "Inception",
            price: "$10",
            id:3
        }
    ])
    return (
        <div>
            <MovieContext.Provider value={[movies,SetMovies]}>
                {children}
            </MovieContext.Provider>
        </div>
    )
}


