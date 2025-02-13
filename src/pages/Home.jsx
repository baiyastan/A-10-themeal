import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductList/ProductList'
import apiClient from '../axios/apiClient'

function Home() {
  const [list,setList] = useState([])

  async function getList () {
    try {
      const res = await apiClient.get(`/search.php?s=a`)
      console.log(res);
      setList(res.data.meals)
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getList()
  }, [])


  return (
    <div>
      <ProductList data={list} />
    </div>
  )
}

export default Home
