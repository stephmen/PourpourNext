// import '../styles/globals.css'
import { GlobalStyles } from '.././global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return( 
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default MyApp
