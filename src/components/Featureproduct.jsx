import React from 'react'
import { useProductContext } from '../context/Productcontext';
import Product from './Product';
import './Product.css'


const Featureproduct = () => {
    const {isLoading, featureProducts} = useProductContext();
    console.log(isLoading)
    if(isLoading){
        return<div>
            ....Loading
        </div>
    }
    console.log("helloooooooohooooooooooo")
  return (
    <div className='features'>
            <div className='check'>Check now!!</div>
            <div className='services'>Featured services</div>
            <div className='featuring'>
                {featureProducts.map((currEl) => {
                     return <Product key={currEl.id} {...currEl}/>;
                })}
            </div>
    </div>
  )
}

export default Featureproduct;