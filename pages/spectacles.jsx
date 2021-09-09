import React, { useState, useRef } from "react";
import Link from 'next/link'
import sanityClient from '../client'
import groq from 'groq'
//import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { Burger, Menu, Footer, Header, HomeLogo, PourPourLogo, Calendar } from '../components';
import { useOnClickOutside } from '../hooks';

const Spectacles = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  useOnClickOutside(node, () => setOpen(false));
  
  return(
    <div >
    <PourPourLogo size="20%"/>
    <Calendar {...props} />
    </div>
    )
    
  }
  
  const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
  
  Spectacles.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "spectacle"]
  `)
})

export default Spectacles