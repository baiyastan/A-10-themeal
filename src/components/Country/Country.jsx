import React from 'react'
import "./Country.css"
import { flag } from '../../data/flag'



let imageAPI = "https://www.themealdb.com/images/icons/flags/big/64"

function Country() {
  return (
    <div className='CountryContainer '>
        <div className='CountryContent'>

        {
            flag.map((item, index) => (
                <div  key={index}>
                    <img src={`${imageAPI}/${item.title}.png`} alt="" />
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Country
