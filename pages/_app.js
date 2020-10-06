import React, {useState, useRef} from 'react'
import { GlobalStyles } from '.././global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { useOnClickOutside } from '../hooks'
import { Burger, Menu, Footer, Header, HomeLogo } from '../components';

function MyApp({ Component, pageProps }) {
  
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  
  return( 
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      {/* <Header /> */}
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <Footer />
    </ThemeProvider>
    )
}

export default MyApp
