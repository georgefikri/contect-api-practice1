import React  from 'react'

function Movie({
    name,
    price
}) {
    return (
        <div>
           <p> {name}</p>
           <p>{price}</p>
        </div>
    )
}

export default Movie
