import React from "react";
import { useContext } from "react";
import ThemeContext from "../context";

const Layout = ({children}) =>{
    // destructor
    const {theme} = useContext(ThemeContext);
    return (
        <div style={{background: theme.background, color: theme.font}}>
            {children}
        </div>
    );
};

export default Layout