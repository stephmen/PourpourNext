import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }


  body{
    /* display: flex; */
    background-color: #b3cad6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
 
.logo{
padding-top: 3.5rem;
padding-left: 3rem;
width: 55%;
height: 45%;
}

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
  .photo{
/* z-index: -1; */
margin-right: 0;
position: fixed;
bottom: 3rem;
width: 100%;
max-width: 100%;
max-height: 99%;



}
`