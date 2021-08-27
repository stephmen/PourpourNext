//https://www.npmjs.com/package/react-flickr-lightbox

import React from 'react';
import FlickrLightbox from 'react-flickr-lightbox';
import styled from 'styled-components';

const PhotoStyle = styled.div`
position: relative;
left:.8rem;
top: 3rem;
`

export default function Photo() {
    
    
    return(
        <PhotoStyle>
        <FlickrLightbox api_key='f4e750e492da5ecc812fe2a8a5a19e8c' user_id='dmar_qc' searchTerm='FanfarePourpour' limit={20}  />
        <FlickrLightbox api_key='f4e750e492da5ecc812fe2a8a5a19e8c'  searchTerm='Pourpour'   />
        </PhotoStyle>

    )
}

