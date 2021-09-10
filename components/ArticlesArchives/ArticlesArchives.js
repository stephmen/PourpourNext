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
    {props.posts.map(
      ({ _id, title = '', slug = '', publishedAt
      = '' }) =>
      slug && (
        <Link key={_id} href="/archives/[slug]" as={`/archives/${slug.current}`}>
        <li key={_id}> {new Date(publishedAt).toLocaleDateString('fr-FR',options)} <br></br><span> {title} </span></li>
          
        {/* <li key={_id}> {title} {new Date(_publishedAt).toLocaleDateString('fr-FR',options)}</li> */}
        </Link>
        ))}
    </div>
    <div className="info">
    </div>
    </ArticlesArchivesStyles>
    )
    
  }
  
//   Calendar.getInitialProps = async () => ({
//   posts: await client.fetch(groq`
//     *[_type == "post" && publishedAt < now()]
//   `)
// })

export default ArticlesArchives;








