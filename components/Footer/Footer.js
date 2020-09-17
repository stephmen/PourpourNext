import React from 'react';
import { StyledFooter } from './Footer.styled.js';


export default function Footer() {

    return(
        <StyledFooter>
        <footer className="footer">
        <div className="Left"></div>
        <div className="bottomIcon">
            <img src="Courrier.png" alt=""/>
            <text>"               "</text>
            <img src="facebook.png" alt=""/>
            <text>"               "</text>
            <img src="Youtube.png" alt=""/>
            <text>"               "</text>
            <img src="twitter.png" alt=""/>
        </div>
    </footer>
    </StyledFooter>
    )
}