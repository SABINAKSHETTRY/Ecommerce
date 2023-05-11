import React from "react";
import "./Services.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="upperfooter">
                <div><h3>Follow us on</h3></div>
                <div className="image">
                    <img className="symbol" src="discord.png" alt="" />
                    <img className="symbol" src="youtube.png" alt="" />
                    <img className="symbol" src="twitter.png" alt="" />
                    <img className="symbol" src="instagram.png" alt="" />
                </div>
            </div>
            <div className="lowerfooter">
                <p>&copy; 2023 Online SHopping/All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
