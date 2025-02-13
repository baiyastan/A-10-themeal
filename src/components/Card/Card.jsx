import React from 'react'
import "./Card.css"

function Card({food}) {
  return (
    <div className='meals'>
        <div>
            <img className='meal-img' src={food.strMealThumb} alt={food.strMeal} />
        </div>
        <h2>{food.strMeal}</h2>
        

    </div>

  )
}

export default Card
