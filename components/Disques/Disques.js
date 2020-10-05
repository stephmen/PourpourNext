import React, { useState } from 'react';
import { StyledDisques, SyledTitle, AppleMusic, BuyingCD } from './Disques.styled';
import styled from 'styled-components'
import Link from 'next/link'

const ApplePlayer = styled.div`
position: absolute;
top: 10rem;
width:100%;
max-width:660px;`
/* overflow:hidden; */
/* background:transparent; */


const Disques = (props) => {

    const [player, closePlayer] = useState(true);
    
return(
    
    <div>
    <SyledTitle> Nos Albums</SyledTitle>
    <StyledDisques>
    <img className="cd" src='pourtoutlemondedame.jpg' />
    <img className="cd" src='lapourpour.jpg'/>
    <img className="cd" src='Danse des Breloques.jpg'/>
    <img className="cd" src='Karussel.jpg'/>
    <img className="cd" src='Le Bal.jpg'/>
    </StyledDisques>
    
    <BuyingCD>
    <p><h1>Vous pourvez vous procurez nos albums aux boutiques suivantes:</h1></p>
   
    <div>
    <Link href="https://actuellecd.com/fr/artiste/fanfarepourpour_/Fanfare_Pourpour" > 
    <img className="Dame" src="actuellelogo.png" />
    </Link>
    </div>
    <div>
    <Link href="https://music.apple.com/ca/artist/fanfare-pourpour/419642215" > 
    <img className="Apple" src="Apple_logo_black.svg.png" />
    </Link>
    </div>
    </BuyingCD>
    


    
     {/* <AppleMusic>
        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450"  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ca/album/la-pourpour/1036900618"></iframe>
     </AppleMusic> */}

    </div>
)

}

export default Disques

// https://actuellecd.com/fr/artiste/fanfarepourpour_/Fanfare_Pourpour