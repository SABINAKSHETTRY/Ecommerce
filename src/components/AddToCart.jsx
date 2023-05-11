import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { useState } from "react";
import "../Single.css";
import Cart from "../Cart";
import { useCartContext } from "../context/Cartcontext";

import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
    const {addToCart} = useCartContext();
    const { id, stock } = product;

    const [amount, setamount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1);
    };
    const setIncrease = () => {
        amount < stock ? setamount(amount + 1) : setamount(stock);
    };
    return (
        <div classname="holds">
            <div>
                <CartAmountToggle
                    amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease}
                />
            </div>

            <div>
                <NavLink to="/cart" onClick={() => addToCart(id,amount,product)}>
                    <button
                     className="addTocart">Add To Cart</button>
                </NavLink>
            </div>
        </div>
    );
};

export default AddToCart;
