import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
    console.log(user)

    const handleclick = () => {
        console.log(menu);
        setmenu(true);
    };
    const clickhandle = () => {
        console.log(menu);
        setmenu(false);
    };
    return (
        <nav className="nvbg">
            <div className={menu ? "active " : " inactive "}>
               

               
                    <ul className="navbarlist">
                        <li>
                            <Link to="/" className="navy" onClick={clickhandle}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="navy"
                                onClick={clickhandle}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="navy"
                                onClick={clickhandle}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/product"
                                className="navy"
                                onClick={clickhandle}
                            >
                                Product
                            </Link>
                        </li>
                        {
                        isAuthenticated &&
                        <h2 className="usernames">{user.name}</h2>}

                        {isAuthenticated ? (
                            <li>
                                <button
                                    className="navbutton"
                                    onClick={() =>
                                        logout({
                                            logoutParams: {
                                                returnTo:
                                                    window.location.origin,
                                            },
                                        })
                                    }
                                >
                                    Log Out
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button
                                    className="navbutton"
                                    onClick={() => loginWithRedirect()}
                                >
                                    Log In
                                </button>
                            </li>
                        )}
                        <li>
                            <img
                                className="imagee"
                                src="carts.png"
                                alt="logo"
                                onClick={clickhandle}
                            />
                        </li>
                    </ul>
               
                <div className="smallnav">
                    <img
                        className="smallcross"
                        src="crossed.png"
                        onClick={clickhandle}
                    />

                    <img
                        className="smallmenu"
                        src="list.png"
                        onClick={handleclick}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
