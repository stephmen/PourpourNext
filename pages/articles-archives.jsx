import React, { useState, useRef } from "react";
import Link from 'next/link'
import sanityClient from '../client'
import groq from 'groq'

import { PourPourLogo, ArticlesArchives } from '../components';
import { Main } from '../components/Styled-Component/spectacle.styled'
import { useOnClickOutside } from '../hooks';


const Spectacles = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  useOnClickOutside(node, () => setOpen(false));
  
  return(
    <Main>
    <PourPourLogo size="60%"/>
    <ArticlesArchives {...props} />
    </Main>
    )
    
  }
  
  const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
  
  Spectacles.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "article"]
  `)
})

export default Spectacles