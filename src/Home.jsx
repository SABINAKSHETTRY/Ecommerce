import React from "react";
import "./Home.css";
import Services from "./components/Services";
import Payment from "./components/Payment";
import Featureproduct from "./components/Featureproduct";

const Home = ({ data = "EVERYTHING'S HERE !" }) => {
    console.log(data);

    return (
        <div className="homeholder">
            <div className="homesection">
                <div className="homeright">
                    <h2 className="shop_here">{data}</h2>
                    <p className="description">
                        Here is all you need. Do shop more. Here you go!! Enjoy
                        your online shopping.Customers can shop from the comfort
                        of their own homes or anywhere with an internet
                        connection, 24 hours a day, seven days a week."Online
                        shopping is just a click away. Don't hesitate. Open your
                        laptop and browse for what you need."
                    </p>
                    <button className="shopbtn">SHOP HERE</button>
                </div>
                <div className="homeleft">
                    <img className="homeimage" src="shopping-carty.jpg"></img>
                </div>
            </div>
            <Featureproduct />
            <Services />
            <Payment />
        </div>
    );
};

export default Home;
