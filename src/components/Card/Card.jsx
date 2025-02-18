import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card({food}) {
  return (
    <div className='meals'>
        <Link to={`/info/${food.idMeal}`}>
            <img className='meal-img' src={food.strMealThumb} alt={food.strMeal} />
        </Link>
        <h2>{food.strMeal}</h2>
        

    </div>

  )
}

export default Card
