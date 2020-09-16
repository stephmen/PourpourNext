import React from "react";
 //import Menu from "../components/Menu"
import { Burger, Menu } from '../components';

const pageOne = (props) => {
   
    return(
    <div>
    <header className="header1">
        <div className="home">
            <img src="Vector.png" alt="home"/>
        </div>
        <div>
            
            <Menu />
        </div>
    </header>
     <main>
        <img className="logo" src="Pourpour_Logo.png" /> 

    </main>
    <img className="photo" src="PlacedesArtsPP1.jpg" />
    <footer className="footer">
        <div className="Left"></div>
        <div className="bottomIcon">
            <img src="Courrier.png" alt=""/>
            <text>"               "</text>
            <img src="facebook.png" alt=""/>
            <text>"               "</text>
            <img src="Youtube.png" alt=""/>
            <text>"               "</text>
            <img src="twitter.png" alt=""/>
        </div>
    </footer>
    </div>
    )
    
}

export default pageOne