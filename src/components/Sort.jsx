import React from "react";
import "./GridList.css";
import { useFilterContext } from "../context/Filtercontext";

const Sort = () => {
    const { grid_view, setGridview, setListview, filter_products,sorting} =
        useFilterContext();
    // console.log(grid_view);
    return (
        <div className="gridlisttop">
            <div className="flexview">
                <div className="gridviews">
                    <button
                        className={grid_view ? "active gridbtns" : "gridbtns"}
                        onClick={setGridview}
                    >
                        <img className="grid" src="perspective.png"></img>
                    </button>
                </div>
                <div className="listviews">
                    <button
                        className={grid_view ? "listbtns" : "active listbtns"}
                        onClick={setListview}
                    >
                        <img className="list" src="view-list.png"></img>
                    </button>
                </div>
            </div>
            <div className="productnumber">
                <p>{filter_products.length}</p>
                <p>Products available</p>
            </div>

            <div>
                <form className="sortform" action="#">
                    <label htmlFor="sort"></label>
                    <select className="selectsort" name="sort" 
                    id ="sort" 
                    onClick={sorting}>
                        <option value="lowest">Price(lowest)</option>
                        <br/>
                        <option value="highest">Price(highest)</option>
                        <br/>
                        <option value="a-z">Price(a-z)</option>
                        <br/>
                        <option value="z-a">Price(z-a)</option>
                        <br/>
                    </select>

                </form>
            </div>
        </div>
    );
};

export default Sort;
