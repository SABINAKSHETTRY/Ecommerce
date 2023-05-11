import React from "react";
import "../Single.css";



const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <>
                <div className="amounts">
                    <div>
                        <button
                            onClick={() => {
                                setDecrease()
                            }}
                            className="button11"
                        >
                            -
                        </button>
                    </div>
                    <div className="amtbtn">{amount}</div>
                    <div>
                        <button
                            onClick={() => {
                                setIncrease()
                            }}
                            className="button12"
                        >
                            +
                        </button>
                    </div>
                </div>

           
        </>
    );
};

export default CartAmountToggle;
