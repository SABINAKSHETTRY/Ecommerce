import React from "react";
import "./GridList.css";
import { NavLink } from "react-router-dom";
import Singleproduct from "../Singleproduct";

const ListView = ({ products }) => {
    return (
        <div className="listflex">
            {products.map((currElem) => {
                const { id, name, image, price, description } = currElem;
                return (
                    <div className="twolists">
                        <div className="imagepart">
                            <img src={image} />
                        </div>
                       <hr/>
                        <div className="descriptionpart">
                            <h3>{name}</h3>
                            <p>{price}</p>
                            <p>{description.slice(0, 90)}</p>
                            <NavLink to={`/singleproduct/${id}`}>
                              <button className="readbutton">Read More</button>

                            </NavLink>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListView;
