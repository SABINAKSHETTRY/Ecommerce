import React from "react";
import "./Cart.css";
import CartItem from "./components/CartItem";
import { useCartContext } from "./context/Cartcontext";

const Cart = () => {
    const { cart, total_price} = useCartContext();
    // console.log(cart);
    return (
        <div>
            <div className="cart_containerss">
                <div className="cart_head">
                    <div className="item">Item</div>
                    <div className="price ">Price</div>
                    <div className="quantity">Quantity</div>
                    <div className="subtotal">SubTotal</div>
                    <div className="removed">Remove</div>
                </div>
                <div className="cartItem">
                    {cart.map((currElem) => {
                        return <CartItem key={currElem.id} {...currElem} />;
                        console.log(currElem);
                    })}
                </div>
            </div>
            <div  className="totalprice">
              <p>Total Price : Rs. {total_price}</p>

            </div>
        </div>
    );
};

export default Cart;
