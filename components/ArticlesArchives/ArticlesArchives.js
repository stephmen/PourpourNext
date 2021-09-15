import Link from 'next/link'
import React, { useState, useRef } from "react";
import { ArticlesArchivesStyles } from "./ArticlesArchives.styled";



const ArticlesArchives = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  
  return(
    <ArticlesArchivesStyles>
    
    <h1 className="titre" >Nos projets</h1>
    
    <div className="spectacle">
    {props.articles.map(
      ({ _id, title = '', slug = '', projet = {}}) =>
      slug && (
        <Link key={_id} href="/archives/[slug]" as={`/archives/${slug.current}`}>
        <li key={_id}> 
        <br></br><span> {title} </span>
        <br></br><span> {projet.title} </span>
        </li>
        </Link>
        ))}
        
    </div>
    <div className="info">
    </div>
    </ArticlesArchivesStyles>
    )
    
  }
  


export default ArticlesArchives;








