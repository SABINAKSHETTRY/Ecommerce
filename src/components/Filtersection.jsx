import React from "react";
import { useFilterContext } from "../context/Filtercontext";
import './GridList.css'
const Filtersection = () => {
    const {filters:{text}, updateFilterValue}= useFilterContext()
    return (
        <div>
            <div className="searching">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        type="text"
                        name="text"
                        placeholder="Search product...."
                        value={text}
                        onChange={updateFilterValue}
                    />
                </form>
            </div>
        </div>
    );
};

export default Filtersection;
