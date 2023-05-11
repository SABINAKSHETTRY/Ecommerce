import React from 'react'

const Cartreducer = (state,action) => {
    if (action.type==="ADD_TO_CART"){
        let {id,amount,product}=action.payload;
        console.log("helloooooo")

    
    let cartProduct;
    cartProduct={
        id,
        name:product.name,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock,

    }


    return{
        ...state,
        cart:[...state.cart,cartProduct],
    }
}
if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if(action.type==='CART_TOTAL_PRICE'){
    let total_price=state.cart.reduce((initialval,currEl)=>{
     let {price,amount}=currEl;
     initialval = initialval+ price*amount;
     return initialval

    },0)
    return{
      ...state,
      total_price,
    }
  }

  return  state;

    
  
}

export default Cartreducer