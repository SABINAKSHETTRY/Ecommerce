import React from "react";
// import Singleproduct from "../Singleproduct";
import '../Single.css'

const MyImage = ({ images = [{ url: "" }] }) => {
    // yo kina gareko bhanda images sidhai lekhda undefined bhanyo tesko solution ko lai images lai "" garera initiate agrne [] yo chai array xa ni ta images  ko soo use agreko ani {} yo chai image bhtra object xa ni ta soo
    console.log(images);
    return (
        <div className="twosides">
            <div className="imagetwo">
                {images.map((currel, id) => {
                    return (
                        <div classname="imagediv">
                            <img className="image4" src={currel.url} key={id} />
                        </div>
                    );
                })}
            </div>
            <div >
                <img className="mainimage"  src={images[0].url} />
            </div>
        </div>
    );
};

export default MyImage;
