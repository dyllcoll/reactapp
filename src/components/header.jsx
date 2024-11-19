import React from "react";
import "./header.css";
import logoImage from "../../assets/headerimg.png";

// declare the componet
function Header() {
    return(
        <>
            <img src={logoImage} className="header-image" alt="logo for website"/>
            <h2 className="header-title"> Welcome to the Meme Generator App</h2>
            <h4 className="header-text"> A Dynamic Web App using react</h4>
        </>
    );
}

export default Header;