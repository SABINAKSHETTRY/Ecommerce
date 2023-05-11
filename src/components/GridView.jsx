import React from 'react'
import Product from './Product'
import './GridList.css'

const GridView = ({products}) => {
  console.log(products)
  return (
    <div className="productsection">
        {products.map((currEl)=>{
            return <Product key ={currEl.id}{...currEl}/>

        })}

    </div>
  )
}

export default GridView