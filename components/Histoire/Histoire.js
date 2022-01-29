import React, { useState, useRef } from "react";
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'


const client = sanityClient.withConfig({apiVersion: '2021-06-07'})


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}


const Histoire = (props) => {
  const {
    title = 'Missing title',
    body = [],
    imagesGallery = [],
  } = {...props}
 
  
  return(
   
    <div className="main">
    <h1> {title}</h1>
    <img src={urlFor(props.posts[0].imagesGallery[1]).width(550).url()}/>
    <BlockContent blocks={props.posts[0].body}/>
    <img src={urlFor(props.posts[0].imagesGallery[0]).width(550).url()}/>
    </div>
    
    )
    
  }
  
  


export default Histoire