import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/Cartreducer'

const CartContext = createContext();


const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    total_price: "",
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product) => {
        // console.log("g")
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    };

    const removeItem = (id) => {
       
        dispatch({ type: "REMOVE_ITEM", payload: id });
      };

      useEffect(()=>{
        dispatch({type:"CART_TOTAL_PRICE"})
      })

    return (
        <CartContext.Provider value={{ ...state, addToCart,removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
const useCartContext=()=>{
    return useContext(CartContext);
};
export { CartProvider, useCartContext };
