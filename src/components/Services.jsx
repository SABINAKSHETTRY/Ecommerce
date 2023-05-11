import React from "react";
import "../Services.css";

const Services = () => {
    return (
        <div className="serviceholder">
            <h2 className="guarantee">We Guarantee</h2>
            <div className="ourservice">
                <div className="serv1">
                    <p className="serv1p">Super Fast and Free Delivery</p>
                    <div className="logo">
                        <img className="logoss" src="shipping.png" />
                    </div>
                </div>

                <div className="serv2">
                    <div className="upper">
                        <p className="ups">Non-Contact Shipping</p>
                        <div className="logo">
                        <img className="logos" src="globe.png" />
                    </div>
                    </div>
                    <div className="lower">
                        <p className="ups">Money-Back Assurance</p>
                        <div className="logo">
                        <img className="logos" src="return.png" />
                    </div>
                    </div>
                </div>
                <div className="serv3">
                    <p className="serv3p">Super Secure Payment System</p>
                    <div className="logo">
                        <img className="logoss" src="pay.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
