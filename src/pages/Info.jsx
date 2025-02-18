import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../axios/apiClient'
import { flag } from '../data/flag'
import "./info.css"

let imageAPI = "https://www.themealdb.com/images/icons/flags/big/64"
let ingrAPI = "https://www.themealdb.com/images/ingredients"

function Info() {
    const {id} = useParams()
    const [meals, setMeals] = useState({})

    const findTitle = flag.find((x) => x.str == meals.strArea)
    

    async function getMealInfo() {
        try {
            const res = await apiClient.get(`/lookup.php?i=${id}`)

            console.log(res);
            setMeals(res.data.meals[0])
            
        } catch (error) {
            console.log(error);            
        }
    }


    useEffect(() => {
        getMealInfo()
    }, [])

    let ingredient = []

    for (let i =1; i <= 20; i++){
        let strName = meals["strIngredient"+i]
        let strMeasure = meals["strMeasure"+i]

        if(strName) {
            ingredient.push({name: strName, measure: strMeasure})
        }
    }

    console.log(ingredient);
    

  return (
    <div className='info'>
      <div className='flag'>
        <h3>{meals.strMeal}</h3>
        <img src={`${imageAPI}/${findTitle?.title}.png`} alt="" />
      </div>
      <div className='info-content'>
        <div className='info-left'>
            <img src={meals.strMealThumb} alt="" />
        </div>
        <div className='info-right'>
            {
                ingredient.map((item, index) => (
                    <div key={index}>
                        <img src={`${ingrAPI}/${item.name}.png`} alt="" />
                        <p></p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Info
