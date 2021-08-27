import Link from 'next/link'
import React, { useState, useRef } from "react";
import { CalendarStyle } from "./Calendar.styled";



const Calendar = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  
  return(
    <CalendarStyle>
    
    <h1 className="titre" >Nos prochains spectales</h1>
    <div className="spectacle">
    {props.posts.map(
      ({ _id, title = '', slug = '', _updatedAt = '' }) =>
      slug && (
        <Link key={_id} href="/spectacles/[slug]" as={`/spectacles/${slug.current}`}>
        <li key={_id}> {title} {new Date(_updatedAt).toLocaleDateString('fr-FR',options)}</li>
        {/* <li key={_id}> {title} {new Date(_publishedAt).toLocaleDateString('fr-FR',options)}</li> */}
        </Link>
        ))}
    </div>
    </CalendarStyle>
    )
    
  }
  
//   Calendar.getInitialProps = async () => ({
//   posts: await client.fetch(groq`
//     *[_type == "post" && publishedAt < now()]
//   `)
// })

export default Calendar;








