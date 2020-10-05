import React, { useState, useRef } from "react";
//import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { Burger, Menu, Footer, Header, HomeLogo, PourPourLogo } from '../components';
import { useOnClickOutside } from '../hooks';

const Disques = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

    return(
    <div >
    <PourPourLogo />
    <img className="photo" src="PlacedesArtsPP1.jpg" />
    </div>
    )
    
}

export default Disques