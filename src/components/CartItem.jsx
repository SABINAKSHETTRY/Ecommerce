import React from "react";
import "../Cart.css";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/Cartcontext";

const CartItem = ({ id, image, name, amount, price }) => {
    const { removeItem } = useCartContext();
    // const setDecrease = () => {};

    // const setIncrease = () => {};

    return (
        <div className="cart_head">
            
                <div className="imagename">
                    <div>
                        <img className="smallimg price" src={image} />
                    </div>
                    <div className="prodname">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="price">{price}</div>
                <div className="quantity">
                  
                        {amount}
                      
                   
                </div>
                <div className="subtotal">{price * amount}</div>
                <div>
                    
                    <img onClick={()=>removeItem(id)} className="removed" src="bin.png"  />
                    
                    
                </div>
            
        </div>
    );
};

export default CartItem;
