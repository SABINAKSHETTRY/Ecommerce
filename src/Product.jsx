import "./Productpage.css";
import { useEffect } from "react";
import Filtersection from "./components/Filtersection";
import Productlist from "./components/Productlist";
import Sort from "./components/Sort";
import { useFilterContext } from "./context/Filtercontext";


const Product = () => {
  const {filter_products} = useFilterContext();


    return (
        <div>
            <div className="productwrapper">
                <div className="leftside">
                    <Filtersection />
                </div>
                <div className="rightside">
                    <div className="sort">
                        <Sort />
                    </div>
                    <div className="productlist">
                        <Productlist />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
