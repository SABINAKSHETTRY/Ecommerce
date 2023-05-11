import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import MyImage from "./components/MyImage";

import './Single.css'

import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } =
        useProductContext();

    const { id } = useParams();

    const {
        id: alias,
        name,
        company,
        price,
        description,
        category,
        stock,
     
        reviews,
        image,
    } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);

    if (isSingleLoading) {
        return <div classname="loading">Loading.....</div>;
    }

    return (
        <div>
            {/* <p>head{name}</p> */}
                <div className="container">
                    <div className="productimage">
                        <MyImage images={image} />
                    </div>
                    <div className="productdata">
                        <h2>{name}</h2>
                        <p>Reviews : {reviews}</p> 
                        <p>Rs. {price}</p>
                        <p>{description}</p>
                        <div className="fourdata">
                            <div className="firstdata">
                                <p>Free delivery</p>
                            </div>

                            <div className="seconddata">
                                <p>Replacement within 30 days</p>
                            </div>

                            <div className="thirddata">
                                <p>Delivered Guarantee</p>
                            </div>

                            <div className="fourthdata">
                                <p>Warranty</p>
                            </div>
                        </div>
                        <div className="available">
                            <p>Available:{stock>0 ? "In Stock":"Not Available"}
                            </p>
                        </div>
                        <hr></hr>
                        {stock > 0 && <AddToCart product={singleProduct}/>}
                    </div>
                    
                </div>
           
        </div>
    );
};
export default Singleproduct;
