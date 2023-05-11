import "./Product.css";
import { NavLink } from "react-router-dom";

const Product = (currEl) => {
    const { name, id, image, price, category } = currEl;
    return (
        <NavLink to={`/Singleproduct/${id}`}>
{/*            
             navlink use garera singleproduct ma jadai xam so jun ma jadai xam
            teslai router bhatra rakhna anbirsa  */}
            <div className="productholder">
                <div className="productimg">
                    <img className="prodpicture" src={image} alt={name} />
                    <div className="category">{category}</div>
                </div>
                <div className="nameprice">
                    <h3>{name}</h3>
                    <p className="prices"> Rs.{price}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Product;
