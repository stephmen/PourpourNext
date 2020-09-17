import React, { useState, useRef } from "react";
//import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { Burger, Menu, Footer } from '../components';

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";


    return(
    
    <div>
     <header className="header">
    </header>
     <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
     <Menu open={open} setOpen={setOpen} id={menuId} />
     
     
        
     
     <main>
        <img className="logo" src="Pourpour_Logo.png" /> 

    </main>
    <img className="photo" src="PlacedesArtsPP1.jpg" />
    <Footer />
    </div>
    
    )
    
}

export default PageOne