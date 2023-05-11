import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Productcontext";
import { FiltercontextProvider } from "./context/Filtercontext";
import { CartProvider } from "./context/Cartcontext";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={(typeof window !== 'undefined' && window.location.origin) || 'not-authenticated'}
            
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
           

            <AppProvider>
                <FiltercontextProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FiltercontextProvider>
            </AppProvider>
        </Auth0Provider>
        
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
