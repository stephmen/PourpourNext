import React, { useState, useRef } from "react";
//import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { PourPourLogo } from '../components';
import MainPage from '../components/Styled-Component/pageone.styled'
import { useOnClickOutside } from '../hooks';

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

    return(
    <MainPage>
    <PourPourLogo className="logo" size="75%"/>
    <img className="photo" src="PlacedesArtsPP1.jpg" />
    </MainPage>
    )
    
}

export default PageOne