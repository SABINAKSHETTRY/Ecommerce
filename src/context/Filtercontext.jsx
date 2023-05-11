import { createContext, useContext, useEffect, useReducer } from "react";
import {useProductContext } from "./Productcontext";
import reducer from "../reducer/Filterreducer";



const Filtercontext = createContext()


const FiltercontextProvider = ({children})=>{

const {products} = useProductContext();


const initialState={
    filter_products :[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
      text:"",
    }
    
}

const [state,dispatch] = useReducer(reducer,initialState)

const setGridview =()=>{
    dispatch({type:"SET_GRID_VIEW"})
}

const setListview =()=>{
    dispatch({type:"SET_LIST_VIEW"})
}



const sorting = (event) => {
    console.log("j payo")
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };


  const updateFilterValue=(event)=>{

    let value = event.target.value;
    
     
    return dispatch({type:"UPDATE_FILTER_VALUE",payload:value})
  }


  
  useEffect(()=>{
  
    dispatch({type:"SORTING_PRODUCTS"});
    
   

  },[products,state.sorting_value])

  useEffect(()=>{
    dispatch({type:"UPDATE_FILTERS_PRODUCTS"})

  },[products, state.filters])




useEffect(()=>{
   dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
},[products])

return (
    <Filtercontext.Provider value={{...state,setGridview,setListview,sorting,updateFilterValue}}>
      {children}
    </Filtercontext.Provider>
)
}
const useFilterContext = ()=>{
    return useContext(Filtercontext);
}
export{Filtercontext,useFilterContext,FiltercontextProvider}